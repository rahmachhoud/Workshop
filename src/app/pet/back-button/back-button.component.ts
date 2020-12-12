import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {
  @Input()color: string;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
  }

}
