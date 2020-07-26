import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMenorNAComponent } from './listado-menor-na.component';

describe('ListadoMenorNAComponent', () => {
  let component: ListadoMenorNAComponent;
  let fixture: ComponentFixture<ListadoMenorNAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMenorNAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMenorNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
