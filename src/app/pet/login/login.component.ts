import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/pet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
alert = false;
username: string;
password: string;
  constructor(private p: PetService, private  router: Router) { }

  ngOnInit(): void {
  }
logIn() {
  if (this.username === 'admin@petsShop.com' && this.password === 'zizou' ) {
    this.router.navigateByUrl('pets');
  }
  else {
    alert('please enter valid details');
  }
}
}
