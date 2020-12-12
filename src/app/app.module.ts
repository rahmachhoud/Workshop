import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



import { PetService } from './shared/pet.service';
import { ListPetComponent } from './pet/list-pet/list-pet.component';
import { AddPetComponent } from './pet/add-pet/add-pet.component';
import { EditPetComponent } from './pet/edit-pet/edit-pet.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DetailsPetComponent } from './pet/details-pet/details-pet.component';
import { ChildPetComponent } from './pet/child-pet/child-pet.component';
import { LoginComponent } from './pet/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { BackButtonComponent } from './pet/back-button/back-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPetComponent,
    AddPetComponent,
    EditPetComponent,
    SearchfilterPipe,
    NavbarComponent,
    DetailsPetComponent,
    ChildPetComponent,
    LoginComponent,
    BackButtonComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule

    ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
