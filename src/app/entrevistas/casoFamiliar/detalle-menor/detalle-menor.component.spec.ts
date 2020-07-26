import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMenorComponent } from './detalle-menor.component';

describe('DetalleMenorComponent', () => {
  let component: DetalleMenorComponent;
  let fixture: ComponentFixture<DetalleMenorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleMenorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
