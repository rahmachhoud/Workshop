import {Component, Input, OnInit, Output} from '@angular/core';
import {PetService} from '../../shared/pet.service';


@Component({
  selector: 'app-list-pet',
  templateUrl: './list-pet.component.html',
  styleUrls: ['./list-pet.component.css']
})
export class ListPetComponent implements OnInit {
  searchValue: string;
pets;

  constructor(public petService: PetService) { }

  ngOnInit(): void {
    this.petService.getAllPets().subscribe((data) => {
      this.pets = data;
      console.log(this.pets);
    }),
      // tslint:disable-next-line:no-unused-expression
      errors => {
        console.log(errors);
      };
  }

  }


