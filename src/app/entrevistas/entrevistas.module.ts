import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebcamModule } from 'ngx-webcam'; // Para la webcam
import { NgxPrintModule } from 'ngx-print'; // Para la impresion
import { ReactiveFormsModule } from '@angular/forms';
import { EntrevistasRoutingModule } from './entrevistas-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { InicioComponent } from './inicio/inicio.component';
import { EntrevistaComponent } from './entrevista/entrevista.component'; // Outlet de la entrevista


import { DatosGeneralesComponent } from './casoIndividual/datos-generales/datos-generales.component';
import { ImpresionFolioComponent } from './casoIndividual/impresion-folio/impresion-folio.component';
import { RevisionGestionDocumentosComponent } from './casoIndividual/revision-gestion-documentos/revision-gestion-documentos.component'; 
import { InsercionLaboralComponent } from './casoIndividual/insercion-laboral/insercion-laboral.component';
import { SeccionUnicaFamComponent } from './casoFamiliar/seccion-unica-fam/seccion-unica-fam.component';
import { SeccionUnicaInfComponent } from './casoInfantil/seccion-unica-inf/seccion-unica-inf.component';
import { FinComponent } from './fin/fin.component';
import { ListadoIndividualComponent } from './listado-individual/listado-individual.component';
import { ListadoFamiliarComponent } from './listado-familiar/listado-familiar.component';
import { SublistadoFamiliarComponent } from './sublistado-familiar/sublistado-familiar.component';
import { ListadoMenorNAComponent } from './listado-menor-na/listado-menor-na.component';
import { DetalleMenorNAComponent } from './detalle-menor-na/detalle-menor-na.component';
import { DetalleMenorComponent } from './casoFamiliar/detalle-menor/detalle-menor.component';

@NgModule({
  declarations: [
    InicioComponent,
    EntrevistaComponent,
    DatosGeneralesComponent,
    ImpresionFolioComponent,
    RevisionGestionDocumentosComponent,
    InsercionLaboralComponent,
    SeccionUnicaFamComponent,
    SeccionUnicaInfComponent,
    FinComponent,
    ListadoIndividualComponent,
    ListadoFamiliarComponent,
    SublistadoFamiliarComponent,
    ListadoMenorNAComponent,
    DetalleMenorNAComponent,
    DetalleMenorComponent
  ],
  imports: [
    CommonModule,
    WebcamModule,
    NgxPrintModule,
    ReactiveFormsModule,
    HttpClientModule,
    EntrevistasRoutingModule
  ]
})
export class EntrevistasModule { }
