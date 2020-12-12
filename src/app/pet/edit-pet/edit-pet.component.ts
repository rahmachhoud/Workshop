import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Pet} from '../../model/Pet';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  p;
  editForm: FormGroup;
  imageSrc: string;
  constructor(public petService: PetService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    console.log(id);
    if (!id) {
      alert('Invalid action.');
      this.router.navigate(['pets']);
      return;
    }
    this.editForm = this.fb.group({
      id: [''],
      nom: ['', Validators.required, Validators.minLength(5)],
      type: ['', Validators.required, Validators.minLength(4)],
      age: ['', Validators.required],
      sexe: ['', Validators.required, Validators.minLength(4)],
      prix: ['', Validators.required],
      image: [null, [Validators.required]],
      fileSource: new FormControl('', [Validators.required])
    });
    this.petService.getPetById(+id)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }
  onSubmit() {
    const id = this.route.snapshot.params.id;
    this.petService.getPetById(id).subscribe((result) => {
      this.p = result;
      this.editForm.patchValue(this.p);
    });

    this.petService.updatePet(id, this.editForm.value).subscribe(() => {
      this.router.navigate(['pets']);

    });
  }
  modifpet()
  {  const id =  this.route.snapshot.params.id;
     console.log(id);
     this.petService.getPetById(id).subscribe((result) => {
      this.p = result;
      this.editForm.patchValue(this.p);
    });

     this.petService.updatePet(id, this.editForm.value).subscribe(() => {
      this.router.navigate(['pets']);

    });

  }
  onFileChange(event) {

    const reader = new FileReader();



    if (event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);



      reader.onload = () => {



        this.imageSrc = reader.result as string;



        this.editForm.patchValue({

          fileSource: reader.result

        });



      };



    }

  }

  get ff(){
    return this.editForm.controls;
  }
}
