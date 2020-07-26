import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Inputmask from 'inputmask';
import * as moment from 'moment';
import { misValidaciones } from '../../shared/validations.directives';
import { globalCats } from '../../shared/catalogos';
import { getConnection, getConnectionManager } from 'typeorm';

// Imports necesarios para el guardado en jQuery
import { DatabaseService } from '../../data-access/database.service'; // Conexion con la db
import { Citas } from '../../data-access/entities/citas.entity';


declare var M: any // var Materialize
declare var $: any // var jQuery

// Obtenemos la fecha de hoy para el fomulario y el folio
var dToday = moment(new Date()).format("DD/MM/YYYY");

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css'],
  providers: [DatabaseService]
})
export class CitasComponent implements OnInit {

  epochNow = Date.now();

  constructor(
    private router: Router,
    private _database: DatabaseService
  ) { }

  // Catalo entidades
  catEntidades = globalCats.catEntidades;

  // Catalogo motivo orientacion
  catOrientacion = globalCats.catMotivoOrientacion;

  // === Patrones REGEX === // 
  mayusMinus = "^[A-Za-z\u00C0-\u024F´ ]+$";
  generalText = "^[A-Za-z\u00C0-\u024F´,0-9.;:¿?¡!\n\$ ]+$";
  onlyNumbers = "^[0-9]+$";
  forCURP = "^[A-Z0-9]+$";

  // == FORMULARIO CITAS == //
  formCitas = new FormGroup({
    // Folio generado con epoch
    folioCitasControl: new FormControl(this.epochNow.toString() + '-CITA', []),
    // Fecha de atencion poblada con la fecha de hoy
    fechaAtencionControl: new FormControl(dToday, [
      //misValidaciones.noPastDateValidator,
      misValidaciones.dateValidator,
      Validators.required
    ]),
    // Select con los lugares de atencion existentes
    lugarAtencionControl: new FormControl('', [
      Validators.required
    ]),
    // Nombre completo de la persona migrante
    nombreCompletoControl: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(100),
      Validators.pattern(this.mayusMinus), // Permitimos mayusculas, minusculas, espacios y acentos
      Validators.required
    ]),
    // Select con los distintos motivos de atencion
    motivoOrientacionControl: new FormControl('', [
      Validators.required
    ]),
    // Espacio para poner otro motivo de atencion
    otroMotivoControl: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(this.generalText)
    ]),
    // Quien atendion la solicitud
    atendidoPorControl: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(100),
      Validators.pattern(this.mayusMinus),
      Validators.required
    ]),
    timestamp: new FormControl(dToday)
  });

  async guardarCitas(formulario) {
    const guardarCita = await this._database.connection
    const respuesta = await guardarCita.createQueryBuilder()
      .insert()
      .into(Citas)
      .values(formulario)
      .execute();

    await guardarCita.close();
    await this.router.navigateByUrl("/listadoCitas");
    await M.toast({ html: 'Cita guardada con éxito', classes: 'rounded' })

  }

  submitForm() {
    console.log(this.formCitas.getRawValue());
    this.guardarCitas(this.formCitas.getRawValue());
  }

  ngOnInit() {
    console.log(this.epochNow);
    $(document).ready(function () {

      // Init de select materialize
      $('select').formSelect();

    });

    // Habilitado de las funciones de inputmask
    Inputmask().mask(document.querySelectorAll("input"));

    // Cosa extraña para campos prellenados
    M.updateTextFields = M.updateTextFields;

  }

}
