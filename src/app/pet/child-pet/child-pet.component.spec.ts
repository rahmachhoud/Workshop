import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPetComponent } from './child-pet.component';

describe('ChildPetComponent', () => {
  let component: ChildPetComponent;
  let fixture: ComponentFixture<ChildPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
