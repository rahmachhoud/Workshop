import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPetComponent} from './pet/list-pet/list-pet.component';
import {AddPetComponent} from './pet/add-pet/add-pet.component';
import {EditPetComponent} from './pet/edit-pet/edit-pet.component';
import {DetailsPetComponent} from './pet/details-pet/details-pet.component';
import {LoginComponent} from './pet/login/login.component';


const routes: Routes = [
  {path : 'pets', component : ListPetComponent},
  {path : 'addPet', component : AddPetComponent},
  { path: 'pets/editPet/:id', component: EditPetComponent },
  {path: 'pets/details/:id', component: DetailsPetComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
