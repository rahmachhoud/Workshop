import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Pet} from '../model/Pet';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PetService{
  form: FormGroup;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  baseUrl = 'http://localhost:3000/pets/';
  getAllPets(){
    return this.http.get<Pet[]>('http://localhost:3000/pets');
  }
  getPetById(id: number){
    return this.http.get<Pet>('http://localhost:3000/pets/' + id);
  }
  deletePet(id: number){
    return this.http.delete('http://localhost:3000/pets/' + id);
  }
  addPet(data: any): Observable<any>{
    return this.http.post('http://localhost:3000/pets/', data);
  }
  updatePet( id: any, data: any){
    return this.http.put<Pet>('http://localhost:3000/pets/' + id, data);

  }
  updateP(p: Pet) {
    return this.http.put<Pet>('http://localhost:3000/pets/' + p.id, p);
  }
  submit(form){
    this.addPet(form).subscribe(() => {
      // tslint:disable-next-line:no-unused-expression
      this.router.navigate['/'];

    });

  }
  deletepet(id){
    this.deletePet(id).subscribe(() => {
      console.log('deleted');
    });
  }
}
