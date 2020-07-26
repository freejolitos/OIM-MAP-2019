import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneralComponent } from './informacion-general.component';

describe('InformacionGeneralComponent', () => {
  let component: InformacionGeneralComponent;
  let fixture: ComponentFixture<InformacionGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
