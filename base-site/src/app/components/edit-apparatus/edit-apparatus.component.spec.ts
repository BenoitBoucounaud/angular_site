import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApparatusComponent } from './edit-apparatus.component';

describe('EditApparatusComponent', () => {
  let component: EditApparatusComponent;
  let fixture: ComponentFixture<EditApparatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditApparatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditApparatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
