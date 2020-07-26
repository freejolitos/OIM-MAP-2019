import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFamiliarComponent } from './listado-familiar.component';

describe('ListadoFamiliarComponent', () => {
  let component: ListadoFamiliarComponent;
  let fixture: ComponentFixture<ListadoFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
