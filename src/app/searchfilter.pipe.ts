import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from './model/Pet';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Pets: Pet[], searchValue: string): Pet[] {
    if ( !Pets || !searchValue){
      return Pets;
    }
    return Pets.filter(p =>

p.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      p.type.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      p.sexe.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
