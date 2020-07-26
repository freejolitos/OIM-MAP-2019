import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { FinComponent } from './fin/fin.component';
import { EntrevistaComponent } from './entrevista/entrevista.component';
import { DatosGeneralesComponent } from './casoIndividual/datos-generales/datos-generales.component';
import { ImpresionFolioComponent } from './casoIndividual/impresion-folio/impresion-folio.component';
import { RevisionGestionDocumentosComponent } from './casoIndividual/revision-gestion-documentos/revision-gestion-documentos.component';
import { InsercionLaboralComponent } from './casoIndividual/insercion-laboral/insercion-laboral.component'; 

import { SeccionUnicaInfComponent } from './casoInfantil/seccion-unica-inf/seccion-unica-inf.component';
import { SeccionUnicaFamComponent } from './casoFamiliar/seccion-unica-fam/seccion-unica-fam.component';

import { ListadoIndividualComponent } from './listado-individual/listado-individual.component';
import { ListadoFamiliarComponent } from './listado-familiar/listado-familiar.component';
import { SublistadoFamiliarComponent } from './sublistado-familiar/sublistado-familiar.component';
import { ListadoMenorNAComponent } from './listado-menor-na/listado-menor-na.component';
import { DetalleMenorNAComponent } from './detalle-menor-na/detalle-menor-na.component';
import { DetalleMenorComponent } from './casoFamiliar/detalle-menor/detalle-menor.component';





const routesEntrevistas: Routes = [
  {
    path: 'entrevista',
    component: EntrevistaComponent,
    children: [ 
      { path: 'datosGenerales', component: DatosGeneralesComponent },
      { path: 'datosGenerales/:id', component: DatosGeneralesComponent }, // Duplicado para caso familiar
      { path: 'impresionFolio/:id', component: ImpresionFolioComponent }, 
      { path: 'revisionGestionDocumentos/:id', component: RevisionGestionDocumentosComponent },
      { path: 'insercionLaboral/:id', component: InsercionLaboralComponent },
      { path: 'fin/:id', component: FinComponent }, // Thankyoupage

      { path: 'seccionUnicaFam/:id', component: SeccionUnicaFamComponent },
      { path: 'seccionUnicaInf', component: SeccionUnicaInfComponent },

      { path: 'listadoIndividual', component: ListadoIndividualComponent },
      { path: 'listadoFamiliar', component: ListadoFamiliarComponent },
      { path: 'sublistadoFamiliar/:id', component: SublistadoFamiliarComponent },
      { path: 'detalleMenor/:id', component: DetalleMenorComponent},
      { path: 'listadoMenorNA', component: ListadoMenorNAComponent },
      { path: 'detalleMenorNA/:id', component: DetalleMenorNAComponent },

      { path: '', redirectTo: '/inicioEntrevistas', pathMatch: 'full' }, // No permitir childroutes vacias
      { path: '**', redirectTo: '/inicioEntrevistas', pathMatch: 'full' } // No permitir childroutes inexistentes
    ]
   },
  
  { path: 'inicioEntrevistas', component: InicioComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routesEntrevistas)
  ],
  exports: [
    RouterModule
  ]
})
export class EntrevistasRoutingModule { }
