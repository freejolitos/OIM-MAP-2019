import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionUnicaInfComponent } from './seccion-unica-inf.component';

describe('SeccionUnicaInfComponent', () => {
  let component: SeccionUnicaInfComponent;
  let fixture: ComponentFixture<SeccionUnicaInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionUnicaInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionUnicaInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
