import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoIndividualComponent } from './listado-individual.component';

describe('ListadoIndividualComponent', () => {
  let component: ListadoIndividualComponent;
  let fixture: ComponentFixture<ListadoIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
