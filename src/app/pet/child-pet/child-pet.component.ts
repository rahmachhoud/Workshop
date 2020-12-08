import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PetService} from '../../shared/pet.service';
import {Pet} from '../../model/Pet';

@Component({
  selector: 'app-child-pet',
  templateUrl: './child-pet.component.html',
  styleUrls: ['./child-pet.component.css']
})
export class ChildPetComponent implements OnInit {
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  resize(delta: number) {

    this.size = Math.min(100, Math.max(0, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  ngOnInit(): void {
  }

}
