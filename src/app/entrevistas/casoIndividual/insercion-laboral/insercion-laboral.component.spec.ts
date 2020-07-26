import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsercionLaboralComponent } from './insercion-laboral.component';

describe('InsercionLaboralComponent', () => {
  let component: InsercionLaboralComponent;
  let fixture: ComponentFixture<InsercionLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsercionLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsercionLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
