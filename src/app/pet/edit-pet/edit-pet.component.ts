import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
      nom: ['', Validators.required],
      type: ['', Validators.required],
      age: ['', Validators.required],
      sexe: ['', Validators.required],
      prix: ['', Validators.required]
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

}
