import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusListComponent } from './apparatus-list.component';

describe('ApparatusListComponent', () => {
  let component: ApparatusListComponent;
  let fixture: ComponentFixture<ApparatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApparatusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
