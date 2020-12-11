import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-child-pet',
  templateUrl: './child-pet.component.html',
  styleUrls: ['./child-pet.component.css']
})
export class ChildPetComponent implements OnInit {
  @Input()  like: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  Pet ;

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
  resize(delta: number) {

    this.like = Math.min(100, Math.max(0, +this.like + delta));
    this.sizeChange.emit(this.like);
  }

  ngOnInit(): void {
  }

}
