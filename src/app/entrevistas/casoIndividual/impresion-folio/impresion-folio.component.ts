import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getConnection } from 'typeorm';
import * as moment from 'moment'; // Libreria para calculo de fecha de nacimiento
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

import { DatabaseService } from '../../../data-access/database.service';
import { vwDatosGen } from 'src/app/data-access/entities/vwDatosGenerales.entity';
import { vwRevGesDoc } from 'src/app/data-access/entities/vwRevGesDoc.entity';
import { vwInsercionLabo } from 'src/app/data-access/entities/vwInsercionLabo.entity';
import { seguimientoAdulto } from 'src/app/data-access/entities/sgAdulto.entity';
import { Usuarios } from 'src/app/data-access/entities/user.entity';

import { UserService } from '../../../services/user-service.service';
import { User } from '../../../models/user';




declare var M: any // Materialize
declare var $: any // jQuery

var dToday2 = moment(new Date()).format("DD/MM/YYYY");

@Component({
  selector: 'app-impresion-folio',
  templateUrl: './impresion-folio.component.html',
  styleUrls: ['./impresion-folio.component.css'],
  providers: [
    DatabaseService
  ]
})
export class ImpresionFolioComponent implements OnInit, OnDestroy {

  currentUser: User;

  idFolio: string;
  private sub: any;

  constructor(
    private _database: DatabaseService,
    private route: ActivatedRoute,
    private router: Router,
    public _userServic: UserService
  ) { }

  patronEspecial = "^[A-Za-z\u00C0-\u024F´,0-9.;:¿?¡!\n\$ ]+$"

  formSeguimiento = new FormGroup({
    folioControl: new FormControl(''),
    notaSeguimientoControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(200),
        Validators.pattern(this.patronEspecial),
        Validators.required
      ]),
    timestamp: new FormControl(dToday2)
  })

  async guardarSeguimiento(formulario) {
    const guardarSeguimiento = await getConnection()
    const respuesta2 = await guardarSeguimiento.createQueryBuilder()
      .insert()
      .into(seguimientoAdulto)
      .values(formulario)
      .execute();

    await guardarSeguimiento.close();
    await M.toast({ html: 'Nota de seguimiento guardada con éxito', classes: 'rounded' });
    // await this.router.navigateByUrl('/entrevista/impresionFolio/' + this.idFolio);
    await location.reload();
  }

  submitForm() {
    this.guardarSeguimiento(this.formSeguimiento.getRawValue());
  }


  impresionFolio: vwDatosGen[] = [];
  revisionGestDoc: vwRevGesDoc[] = [];
  insercionLabo: vwInsercionLabo[] = [];
  notasSeguimiento: seguimientoAdulto[] = [];
  datosUsuario: Usuarios[] = [];

  // Para impresion de folio
  impFase: string;
  impNombre: string;
  impFecha: string;
  impCondicionMigratoriaTramite: string;
  impListadoDocumentosControl: string;
  impFoto: string;
  impNombreUsuario: string;
  rutaFase: string;

  boolRevisionGestionDoc: boolean;
  boolInsercionLaboral: boolean;

  fnShowRevisionGestionDoc() {
    this.boolRevisionGestionDoc = true
  }

  fnShowInsercionLaboral() {
    this.boolRevisionGestionDoc = true
    this.boolInsercionLaboral = true
  }

  async getImpresionFolio() {
    const consultaFolio = await this._database.connection
    const resultadoDatosGenerales = await consultaFolio.createQueryBuilder()
      .select("folio")
      .from(vwDatosGen, "folio")
      .where("folio.folioControl = :folioControl", { folioControl: this.idFolio })
      .getMany();
    const resultadoRevGesDoc = await consultaFolio.createQueryBuilder()
      .select("revges")
      .from(vwRevGesDoc, "revges")
      .where("revges.folioControl = :folioControl", { folioControl: this.idFolio })
      .getMany();
    const resultadoInserLabo = await consultaFolio.createQueryBuilder()
      .select("insLabo")
      .from(vwInsercionLabo, "insLabo")
      .where("insLabo.folioControl = :folioControl", { folioControl: this.idFolio })
      .getMany();
    const resultadoSeguimiento = await consultaFolio.createQueryBuilder()
      .select("seguimiento")
      .from(seguimientoAdulto, "seguimiento")
      .where("seguimiento.folioControl = :folioControl", { folioControl: this.idFolio })
      .getMany();
    const rCurrentUser = await consultaFolio.createQueryBuilder()
      .select("usuario")
      .from(Usuarios, "usuario")
      .where("usuario.username = :username", { username: this.currentUser['username'] })
      .getMany();

    this.impresionFolio = await resultadoDatosGenerales;
    this.revisionGestDoc = await resultadoRevGesDoc;
    this.insercionLabo = await resultadoInserLabo;
    this.notasSeguimiento = await resultadoSeguimiento;
    this.datosUsuario = await rCurrentUser;

    this.impFase = await this.impresionFolio[0]['fase'];
    this.impNombre = await this.impresionFolio[0]['nombresControl'] + ' ' + this.impresionFolio[0]['apellidoPaternoControl'] + ' ' + this.impresionFolio[0]['apellidoMaternoControl'];
    this.impFecha = await this.impresionFolio[0]['timestamp'];
    this.impCondicionMigratoriaTramite = await this.impresionFolio[0]['condicionMigratoriaTramiteControl'];
    this.impListadoDocumentosControl = await this.impresionFolio[0]['listadoDocumentosControl'];
    this.impFoto = await this.impresionFolio[0]['fotoControl'];
    this.rutaFase = await this.impresionFolio[0]['URL'];
    this.impNombreUsuario = await this.datosUsuario[0]['nombres'] + ' ' + this.datosUsuario[0]['apellidos']

    if (this.impFase === 'Inserción laboral') {
      console.log('revision documentos')
      await this.fnShowRevisionGestionDoc()
    }
    if (this.impFase === 'Completado') {
      await console.log('insercion laboral')
      await this.fnShowInsercionLaboral()
    }
    // await consultaFolio.close();
  }


  nextStep() {
    console.log('siguiente paso');
    this.router.navigateByUrl(this.rutaFase + '/' + this.idFolio)
  }

  createPDFFolio() {
    var pdf = new jsPDF();
    pdf.autoTable({
      head: [['Folio']],
      body: [[this.idFolio]]
    })
    pdf.autoTable({
      head: [['Nombre', 'Fecha atención', 'Condicion Migratoria que solicitará']],
      body: [
        [this.impNombre, this.impFecha, this.impCondicionMigratoriaTramite]
      ]
    });
    pdf.autoTable({
      head: [['Documentos que se deben obtener para realizar su solicitud ante el INM']],
      body: [
        [this.impListadoDocumentosControl]
      ]
    })
    pdf.autoTable({
      head: [['Nombre quien atendio']],
      body: [
        [this.impNombreUsuario]
      ]
    })
    pdf.save(this.idFolio + '.pdf');
  }

  fnPatchFolio(idFolio: string) {
    this.formSeguimiento.patchValue({
      folioControl: idFolio
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idFolio = params['id'] // The plus (+) is used to convert string into number
    });

    this.currentUser = this._userServic.getUserLoggedIn();
    console.log(this.currentUser)

    this.fnPatchFolio(this.idFolio)
    this.getImpresionFolio();

    $(document).ready(function () {
      $('.modal').modal({
        'preventScrolling': false
      });  // Modal
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
