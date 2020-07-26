import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionGestionDocumentosComponent } from './revision-gestion-documentos.component';

describe('RevisionGestionDocumentosComponent', () => {
  let component: RevisionGestionDocumentosComponent;
  let fixture: ComponentFixture<RevisionGestionDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionGestionDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionGestionDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
