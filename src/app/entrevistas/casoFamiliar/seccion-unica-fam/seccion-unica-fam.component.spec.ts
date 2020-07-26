import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionUnicaFamComponent } from './seccion-unica-fam.component';

describe('SeccionUnicaFamComponent', () => {
  let component: SeccionUnicaFamComponent;
  let fixture: ComponentFixture<SeccionUnicaFamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionUnicaFamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionUnicaFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
