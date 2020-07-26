import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { Angular2CsvModule } from 'angular2-csv';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; // Pagina de inicio de la aplicacion
import { InformacionGeneralComponent } from './components/informacion-general/informacion-general.component';
import { EntrevistasModule } from './entrevistas/entrevistas.module';
import { CitasComponent } from './components/citas/citas.component';
import { ListadoCitasComponent } from './components/listado-citas/listado-citas.component';
import { MonitoreoComponent } from './components/monitoreo/monitoreo.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { LoginComponent } from './components/login/login.component';
import { User } from './models/user';
import { ExportarComponent } from './components/configuracion/exportar/exportar.component';
import { ImportarComponent } from './components/configuracion/importar/importar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformacionGeneralComponent,
    CitasComponent,
    ListadoCitasComponent,
    MonitoreoComponent,
    ConfiguracionComponent,
    LoginComponent,
    ExportarComponent,
    ImportarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
    Angular2CsvModule,
    EntrevistasModule,
    AppRoutingModule
  ],
  providers: [ User ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
