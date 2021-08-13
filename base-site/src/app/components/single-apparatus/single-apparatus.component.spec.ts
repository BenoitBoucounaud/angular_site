import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleApparatusComponent } from './single-apparatus.component';

describe('SingleApparatusComponent', () => {
  let component: SingleApparatusComponent;
  let fixture: ComponentFixture<SingleApparatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleApparatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleApparatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
