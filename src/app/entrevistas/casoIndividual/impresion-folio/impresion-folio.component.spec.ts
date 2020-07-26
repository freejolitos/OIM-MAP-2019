import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresionFolioComponent } from './impresion-folio.component';

describe('ImpresionFolioComponent', () => {
  let component: ImpresionFolioComponent;
  let fixture: ComponentFixture<ImpresionFolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpresionFolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpresionFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
