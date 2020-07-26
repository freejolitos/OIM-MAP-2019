import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMenorNAComponent } from './detalle-menor-na.component';

describe('DetalleMenorNAComponent', () => {
  let component: DetalleMenorNAComponent;
  let fixture: ComponentFixture<DetalleMenorNAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleMenorNAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMenorNAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
