import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../shared/pet.service';

@Component({
  selector: 'app-details-pet',
  templateUrl: './details-pet.component.html',
  styleUrls: ['./details-pet.component.css']
})
export class DetailsPetComponent implements OnInit {
  productID: any;
  productData: any;
  like: number;
  fontSizePx = 16;

  constructor(private petService: PetService,
              private router: Router,
              private actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productID = this.actRoute.snapshot.params.id;
    this.loadProductDetails(this.productID);
  }

  loadProductDetails(productID) {
    this.petService.getPetById(productID).subscribe(product => {
      this.productData = product;
    });
  }
}
