import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

// Aqui van los componentes que van a ser routeados
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InformacionGeneralComponent } from './components/informacion-general/informacion-general.component';
import { CitasComponent } from './components/citas/citas.component'
import { ListadoCitasComponent } from './components/listado-citas/listado-citas.component';
import { MonitoreoComponent } from './components/monitoreo/monitoreo.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { ExportarComponent } from './components/configuracion/exportar/exportar.component';
import { ImportarComponent } from './components/configuracion/importar/importar.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'informacionGeneral', component: InformacionGeneralComponent },
  { path: 'Citas', component: CitasComponent },
  { path: 'listadoCitas', component: ListadoCitasComponent },
  { path: 'Monitoreo', component: MonitoreoComponent },
  { path: 'Monitoreo/:fecha1/:fecha2', component: MonitoreoComponent },
  { path: 'Configuracion', component: ConfiguracionComponent },
  { path: 'exportarDB', component: ExportarComponent},
  { path: 'importarDB', component: ImportarComponent},
  
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'reload'
  }
    )],
  exports: [ 
    RouterModule 
  ]
})
export class AppRoutingModule { }
