import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublistadoFamiliarComponent } from './sublistado-familiar.component';

describe('SublistadoFamiliarComponent', () => {
  let component: SublistadoFamiliarComponent;
  let fixture: ComponentFixture<SublistadoFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublistadoFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublistadoFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
