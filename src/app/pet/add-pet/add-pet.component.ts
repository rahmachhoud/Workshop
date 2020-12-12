import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/pet.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  form: FormGroup;
  imageSrc: string;
  constructor(public petService: PetService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: [null, [Validators.required, Validators.minLength(5)]],
      age: [null, [Validators.required ]],
      prix: [null, [Validators.required]],
      sexe: [null, [Validators.required, Validators.minLength(4)]],
      type: [null, [Validators.required, Validators.minLength(2)]],
      image: [null, [Validators.required]],
      fileSource: new FormControl('', [Validators.required])

    });
  }

  ngOnInit(): void {
  }
  onFileChange(event) {

    const reader = new FileReader();



    if (event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);



      reader.onload = () => {



        this.imageSrc = reader.result as string;



        this.form.patchValue({

          fileSource: reader.result

        });



      };



    }

  }
  get nom() {
    return this.nom.get('nom');
  }
  get f(){
    return this.form.controls;
  }
}
