import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { misValidaciones } from '../../../shared/validations.directives';
import * as moment from 'moment'; // Libreria para calculo de fecha de nacimiento
import Inputmask from 'inputmask'; // Libreria para mascaras
import {
  globalCats,
  Depto,
  Pais,
  Estacion,
  Condicion,
  Tramite,
  Resolucion
} from '../../../shared/catalogos';

// Servicios para el guardado
import { DatabaseService } from '../../../data-access/database.service';
import { DatosGenerales } from '../../../data-access/entities/datosGenerales.entity';
import { ControlFases } from '../../../data-access/entities/ControlFases.entity';

// Especiales para webcam
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';



declare var M: any // Variable para materialize
declare var $: any // Variable para jQuery

// Obtenemos la fecha de hoy para el fomulario y el folio
var dToday = new Date();
var dToday2 = moment(new Date()).format("DD/MM/YYYY");

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css'],
  providers: [
    globalCats,
    DatabaseService // Se incluye para el guardado en base de datos
  ]
})
export class DatosGeneralesComponent implements OnInit, OnDestroy {

  epochNow = Date.now();  

  idFamilia: number;
  private sub: any;
  vFaseControl: number = 2;

  // Init del cascadeo País - Depto
  selectedPais: Pais = new Pais(0, 'ÁPATRIDA')
  // Seteo de paises para nacionalidad y direccion
  paisesNacionalidad: Pais[];
  paisesDireccion: Pais[];
  // Seteo de departamentos para nacionalidad y direccion
  deptosNacionalidad: Depto[];
  deptosDireccion: Depto[];
  // Seteo para las estaciones migratorias
  estaciones: Estacion[];
  // Seteo para la condicion migratoria
  condicion: Condicion[];
  // Seteo para el trámite
  tramite: Tramite[];
  // Condicion migratorio especifica
  resolucion: Resolucion[];

  // Seteo de los catalogos
  constructor(
    private _cats: globalCats,
    private route: ActivatedRoute,
    private router: Router,
    private _database: DatabaseService
  ) { }

  // === Catalogos duros === //

  // Catalogo de lugares de atencion
  catLugarAtencion = globalCats.catEntidades;

  // Identidad de genero
  catOrientacionSexual = globalCats.catOrientacionSexual;

  // Idiomas
  catIdiomas = globalCats.catIdiomas;

  // Estado civil
  catEstadoCivil = globalCats.catEstadoCivil;

  // Medio de transporte
  catMedioTransporte = globalCats.catMedioTransporte;

  // === INICIO PARA WEBCAM === //
  // Configuraciones de la camara
  public showWebcam = false;
  public allowCameraSwitch = true; // impedimos el cambio de camara
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public errors: WebcamInitError[] = [];
  // latest snapshot
  public webcamImage: WebcamImage = null;
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  // === FIN PARA WEBCAM === //

  // === Patrones REGEX === // 
  mayusMinus = "^[A-Za-z\u00C0-\u024F´ ]+$";
  alphaNum = "^[A-Za-z\u00C0-\u024F´,0-9.;:¿?¡!\n\$ ]+$";
  onlyNumbers = "^[0-9]+$";

  // ==== Inicio de formulario fase 1 ==== //
  formDatosGenerales = new FormGroup({
    folioControl: new FormControl(this.epochNow.toString() + '-IND', []),
    // Para indicar la fase en el guardado
    // faseControl: new FormControl(5),
    // Para casos donde exista familia
    idFolioFamilia: new FormControl(0),
    // === INICIO FIRMA ACUERDOS === //
    // Control para checkbox carta de atencion
    checkCartaAtencionControl: new FormControl(false), // OK
    // Cotrol para checkbox aviso de privacidad
    checkAvisoPrivacidadControl: new FormControl(false), // OK
    // Control para checkbox del codigo de conducta
    checkCodigoConductaControl: new FormControl(false), // OK
    // Control para radio de atencion
    radioRecibidoAtencionControl: new FormControl(0), // OK
    // Control para lugar de atenciox
    lugarAtencionControl: new FormControl(0), // OK
    // Controles para documentos
    doctoCartaAtencionControl: new FormControl(''), // OK
    doctoAvisoProvacidadControl: new FormControl(''), // OK
    doctoCodigoConductaCotrol: new FormControl(''), // OK
    // === FIN FIRMA ACUERDOS === //

    // === INICIO DATOS GENERALES === // 
    // Control para los nombres
    nombresControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.mayusMinus),
        Validators.required
      ]), // OK
    // Control para el apellido paterno
    apellidoPaternoControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.mayusMinus),
        Validators.required
      ]), // OK
    // Control para el apellido materno
    apellidoMaternoControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.mayusMinus)
      ]), // OK
    // Control para el nombre alterno
    nombreAlternoControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.mayusMinus)
      ]), // OK
    // Control para la fecha de nacimiento
    fechaNacimientoControl: new FormControl('',
      [
        misValidaciones.noFutureDateValidator,
        misValidaciones.dateValidator,
        Validators.required
      ]), // OK
    // Control para la edad
    edadControl: new FormControl(
      {
        value: '',
        disabled: true
      },
      [
        Validators.minLength(2),
        Validators.maxLength(3),
        Validators.pattern(this.onlyNumbers)
      ]), // OK
    // Control para la nacionalidad
    nacionalidadControl: new FormControl('',
      [
        Validators.required
      ]), // OK
    // Control para el departamento, estado o region
    departamentoControl: new FormControl('',
      [
        Validators.required
      ]), // OK
    // Control para el telefono
    telefonoControl: new FormControl('',
      [
        misValidaciones.regexValidator(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i)
      ]), // OK
    // Control para el correo electronico
    correoElectronicoControl: new FormControl('',
      [
        Validators.maxLength(50),
        Validators.email
      ]), // OK
    // Control para el genero
    radioGeneroControl: new FormControl('',
      [
        Validators.required
      ]), // OK
    orientacionSexualControl: new FormControl(0), // OK
    idiomaControl: new FormControl(0), // OK
    estadoCivilControl: new FormControl(0), // OK
    radioLeerControl: new FormControl(0), // OK
    paisControl: new FormControl(
      '',
      [
        Validators.required
      ]), // OK
    estadoControl: new FormControl('',
      [
        Validators.required
      ]), // OK
    CPControl: new FormControl('',
      [
        Validators.maxLength(10),
        Validators.pattern(this.onlyNumbers)
      ]), // OK
    // === FIN DATOS GENERALES === //

    // === INICIO TRAYECTO MIGRATORIO === //
    fechaIngresoControl: new FormControl('',
      [
        misValidaciones.noFutureDateValidator,
        misValidaciones.dateValidator
      ]), // OK
    medioTransporteControl: new FormControl(0), // OK
    cuantasVecesControl: new FormControl('',
      [
        Validators.maxLength(2),
        Validators.pattern(this.onlyNumbers)
      ]), // OK
    radioRechazoAeropuertoControl: new FormControl(0), // OK
    radioEstacionMigratoriaControl: new FormControl(0), // OK
    estacionMigratoriaControl: new FormControl(0), // OK
    fechaIngresoEstacionControl: new FormControl('',
      [
        misValidaciones.noFutureDateValidator,
        misValidaciones.dateValidator
      ]), // OK
    fechaSalidaEstacionControl: new FormControl('',
      [
        misValidaciones.noFutureDateValidator,
        misValidaciones.dateValidator
      ]), // OK
    tiempoDetencionControl: new FormControl(
      {
        value: '',
        disabled: true
      },
      [
        Validators.minLength(1),
        Validators.maxLength(5)
      ]),
    // === FIN TRAYECTO MIGRATORIO === //

    // === INICIO CONDICION MIGRATORIA === //
    condicionMigratoriaControl: new FormControl('',
      [
        Validators.required
      ]), // OK
    haceCuantoTiempoControl: new FormControl('',
      [
        misValidaciones.noFutureDateValidator,
        misValidaciones.dateValidator
      ]), // OK
    condicionMigratoriaEspecificaControl: new FormControl(0), // OK
    otroCondicionMigratoriaControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.alphaNum)
      ]), // OK
    checkPasaporteControl: new FormControl(0), // OK 
    checkPartidaNacimientoControl: new FormControl(0), // OK
    checkCedulaIdentidadControl: new FormControl(0), // OK
    checkActaMatrimonioControl: new FormControl(0), // OK
    checkNingunoControl: new FormControl(0), // OK
    checkOtroControl: new FormControl(0), // OK
    otroDocumentoControl: new FormControl('', // OK
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.alphaNum)
      ]), // OK
    // === FIN CONDICION MIGRATORIA === //

    // === INICIO TRAMITE A SOLICITAR ANTE EL INM === //
    condicionMigratoriaTramiteControl: new FormControl('',
      [
        Validators.required
      ]), // OK
    otroTramiteSolicitarControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.alphaNum)
      ]), // OK
    listadoDocumentosControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(200),
        Validators.pattern(this.alphaNum)
      ]),
    radioDocumentoIdentidadControl: new FormControl(0), // OK
    radioRealizoCanalizacionControl: new FormControl(0), // OK
    explicacionCanalizadoControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(200),
        Validators.pattern(this.alphaNum) // OK
      ]),
    // === FIN TRAMITE A SOLICITAR ANTE EL INM === //

    // === INICIO ACOMPANAMIENTO === //
    radioRequiereAcompanamientoControl: new FormControl(0), // OK
    queAcompanamientoControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(200),
        Validators.pattern(this.alphaNum)
      ]), // OK
    // === FIN ACOMPANAMIENTO === //

    // === INICIO OBSERVACIONES GENERALES === //
    observacionesControl: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(200),
        Validators.pattern(this.alphaNum)
      ]),
    fotoControl: new FormControl(''), // OK
    // === FIN OBSERVACIONES GENERALES === //
    timestamp: new FormControl(dToday2)

  });


  // === FUNCIONES PARA EL FORMULARIO === //

  // Calculo de edad dada la fecha de nacimiento
  edadPorFechaNac(fechaNac: any): number {
    var a = moment(fechaNac, "DD-MM-YYYY");
    var b = moment(dToday);
    return b.diff(a, 'years');
  }

  // Funcion para setear la edad en el formulario en el campo "edad"
  fnSetEdad() {
    if (this.formDatosGenerales.controls.fechaNacimientoControl.valid && !this.formDatosGenerales.controls.fechaNacimientoControl.pristine) {
      document.getElementById('labelEdad').setAttribute('class', 'active');
      this.formDatosGenerales.patchValue({
        edadControl: this.edadPorFechaNac(this.formDatosGenerales.controls.fechaNacimientoControl.value)
      });
    }
  }

  // Funcion para poblar de forma automatica la edad
  eventEdad() {
    this.fnSetEdad();
  }

  // Calculo de dias de detencion
  tiempoDetencion(fechaEntrada: any, fechaSalida: any): number {
    var a = moment(fechaEntrada, "DD-MM-YYYY");
    var b = moment(fechaSalida, "DD-MM-YYYY");
    var resta = b.diff(a, 'days');
    console.log('resta:' + resta);
    return resta
  }

  // Funcion para setear el tiempo de detencion en el campo "tiempo detencion"
  fnSetTiempoDetencion() {
    if (this.formDatosGenerales.controls.fechaIngresoEstacionControl.valid && this.formDatosGenerales.controls.fechaSalidaEstacionControl.valid && !this.formDatosGenerales.controls.fechaIngresoEstacionControl.pristine && !this.formDatosGenerales.controls.fechaSalidaEstacionControl.pristine) {
      document.getElementById('labelTiempoDetencion').setAttribute('class', 'active');
      this.formDatosGenerales.patchValue({
        tiempoDetencionControl: this.tiempoDetencion(this.formDatosGenerales.controls.fechaIngresoEstacionControl.value, this.formDatosGenerales.controls.fechaSalidaEstacionControl.value)
      });
    }
  }

  // Funcion para poblar la fecha de dentencion
  eventTD() {
    if (this.formDatosGenerales.controls.fechaIngresoEstacionControl.valid && this.formDatosGenerales.controls.fechaSalidaEstacionControl.valid && !this.formDatosGenerales.controls.fechaIngresoEstacionControl.pristine && !this.formDatosGenerales.controls.fechaSalidaEstacionControl.pristine) {
      if (this.tiempoDetencion(this.formDatosGenerales.controls.fechaIngresoEstacionControl.value, this.formDatosGenerales.controls.fechaSalidaEstacionControl.value) > 0) {
        this.fnSetTiempoDetencion();
      } else {
        M.toast({ html: 'La fecha de salida debe de ser mayor que la fecha de entrada' })
      }
    }
  }

  // Guardado de foto en observaciones generales
  guardarFoto() {
    this.showWebcam = false;
    this.formDatosGenerales.patchValue({
      fotoControl: this.webcamImage.imageAsDataUrl
    });
  }

  // Accion que se ejecuta al cerrar el modal
  cerrarModal() {
    this.showWebcam = false;
  }

  // DEBUG
  fnDEBUG() {
    console.log(this.formDatosGenerales);
  }

  modalGuardar() {

  }

  // Se incluyo para guardado del idFolio
  // idFoliores: any;

  async guardarDatosGenerales(formulario) {
    const guardarDatos = await this._database.connection
    const respuesta = await guardarDatos.createQueryBuilder()
      .insert()
      .into(DatosGenerales)
      .values(formulario)
      .execute();

    const respuesta2 = await guardarDatos.createQueryBuilder()
      .insert()
      .into(ControlFases)
      .values([{ folioControl: this.formDatosGenerales.controls.folioControl.value, faseControl: this.vFaseControl }])
      .execute();

    await guardarDatos.close();
    await this.router.navigateByUrl('/entrevista/impresionFolio/' + this.formDatosGenerales.controls.folioControl.value)
    await M.toast({ html: 'Informacion guardada con éxito', classes: 'rounded' })
  }

  // Submit del formulario Continuar
  submitFormContinuar() {
    console.log(this.formDatosGenerales.getRawValue());
    this.guardarDatosGenerales(this.formDatosGenerales.getRawValue());
    
    // this._datosGeneralesService.postDatosGenerales(this.formDatosGenerales.getRawValue())
    //   .subscribe(res => {
    //     this.idFoliores = res as LastInsertID[];
    //     console.log(this.idFoliores)
    //     this.router.navigateByUrl('/entrevista/impresionFolio/' + this.idFoliores.id)
    //     M.toast({ html: 'Datos Generales guardados con éxito', classes: 'rounded' })
    //   });
  };

  // Funciones para select dependiente pais de nacionalidad
  onSelectNacionalidad(pais: any) {
    var swPais: Number = parseInt(pais, 10);
    switch (swPais) {
      case 9: {
        this.fnPatchDeptoNacionalidad(swPais);
        this.formDatosGenerales.patchValue({
          departamentoControl: ""
        });
        break;
      }
      case 38: {
        this.fnPatchDeptoNacionalidad(swPais);
        this.formDatosGenerales.patchValue({
          departamentoControl: ""
        });
        break;
      }
      case 42: {
        this.fnPatchDeptoNacionalidad(swPais);
        this.formDatosGenerales.patchValue({
          departamentoControl: ""
        });
        break;
      }
      case 54: {
        this.fnPatchDeptoNacionalidad(swPais);
        this.formDatosGenerales.patchValue({
          departamentoControl: ""
        });
        break;
      }
      case 73: {
        this.fnPatchDeptoNacionalidad(swPais);
        this.formDatosGenerales.patchValue({
          departamentoControl: ""
        });
        break;
      }
      case 78: {
        this.fnPatchDeptoNacionalidad(swPais);
        this.formDatosGenerales.patchValue({
          departamentoControl: ""
        });
        break;
      }
      case 79: {
        this.fnPatchDeptoNacionalidad(swPais);
        this.formDatosGenerales.patchValue({
          departamentoControl: ""
        });
        break;
      }
      case 128: {
        this.fnPatchDeptoNacionalidad(swPais);
        this.formDatosGenerales.patchValue({
          departamentoControl: ""
        });
        break;
      }
      case 188: {
        this.fnPatchDeptoNacionalidad(swPais);
        this.formDatosGenerales.patchValue({
          departamentoControl: ""
        });
        break
      }
      case 118: {
        this.fnPatchDeptoNacionalidad(swPais);
        this.formDatosGenerales.patchValue({
          departamentoControl: ""
        });
        break
      }
      default: {
        this.fnPatchDeptoNacionalidad(999);
        this.formDatosGenerales.patchValue({
          departamentoControl: 999
        })
        break;
      }
    }
  }
  // Funcion para poblar catalogo de deptos
  fnPatchDeptoNacionalidad(pais: Number) {
    this.deptosNacionalidad = this._cats.getDepto().filter((item) => item.pais == pais);
    //console.log(this.deptosNacionalidad);
  }
  // Funciones para select dependiente pais de nacionalidad
  onSelectDireccion(pais: any) {
    var swPais: Number = parseInt(pais, 10);
    switch (swPais) {
      case 9: {
        this.fnPatchDeptoDireccion(swPais);
        this.formDatosGenerales.patchValue({
          estadoControl: ""
        });
        break;
      }
      case 38: {
        this.fnPatchDeptoDireccion(swPais);
        this.formDatosGenerales.patchValue({
          estadoControl: ""
        });
        break;
      }
      case 42: {
        this.fnPatchDeptoDireccion(swPais);
        this.formDatosGenerales.patchValue({
          estadoControl: ""
        });
        break;
      }
      case 54: {
        this.fnPatchDeptoDireccion(swPais);
        this.formDatosGenerales.patchValue({
          estadoControl: ""
        });
        break;
      }
      case 73: {
        this.fnPatchDeptoDireccion(swPais);
        this.formDatosGenerales.patchValue({
          estadoControl: ""
        });
        break;
      }
      case 78: {
        this.fnPatchDeptoDireccion(swPais);
        this.formDatosGenerales.patchValue({
          estadoControl: ""
        });
        break;
      }
      case 79: {
        this.fnPatchDeptoDireccion(swPais);
        this.formDatosGenerales.patchValue({
          estadoControl: ""
        });
        break;
      }
      case 128: {
        this.fnPatchDeptoDireccion(swPais);
        this.formDatosGenerales.patchValue({
          estadoControl: ""
        });
        break;
      }
      case 188: {
        this.fnPatchDeptoDireccion(swPais);
        this.formDatosGenerales.patchValue({
          estadoControl: ""
        });
        break
      }
      case 118: {
        this.fnPatchDeptoDireccion(swPais);
        this.formDatosGenerales.patchValue({
          estadoControl: ""
        });
        break
      }
      default: {
        this.fnPatchDeptoDireccion(999);
        this.formDatosGenerales.patchValue({
          estadoControl: 999
        })
        break;
      }
    }
  }
  // Funcion para poblar catalogo de deptos
  fnPatchDeptoDireccion(pais: Number) {
    this.deptosDireccion = this._cats.getDepto().filter((item) => item.pais == pais);
    //console.log(this.deptosDireccion);
  }

  fnPatchIdFolioFamilia(id: any) {
    this.formDatosGenerales.patchValue({
      idFolioFamilia: id
    });
  }

  fnPatchFolioControl(id: any) {
    this.formDatosGenerales.patchValue({
      folioControl: id
    })
  }

  handleFileSelect(event: any) {
    console.log(event)
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.idFamilia = params['id']; // (+) converts string 'id' to a number
      if (typeof this.idFamilia != 'undefined') {
        this.fnPatchIdFolioFamilia(this.idFamilia);
        this.fnPatchFolioControl(this.epochNow.toString()+'-AdFAM');
      }
    });

    // console.log(this.formDatosGenerales.value);

    // === Inicio de los catalogos dinamicos === //
    // Paises para nacionalidad y direccion
    this.paisesDireccion = this._cats.getPaises();
    this.paisesNacionalidad = this._cats.getPaises();

    // Init de la funcion para cascading nacionalidad y direccion
    this.onSelectDireccion(this.selectedPais.id);
    this.onSelectNacionalidad(this.selectedPais.id);

    // Estaciones migratorias
    this.estaciones = this._cats.getEstacionesMigratorias();

    // Condicion migratoria
    this.condicion = this._cats.getCondicionMigratoria();

    // Condicion migratoria especifica
    this.resolucion = this._cats.getResolucion();

    // Tramite a solicitar
    this.tramite = this._cats.getTramite();

    // Listar las camaras del dispositivo
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });

    $(document).ready(function(){
      $('.modal').modal({
        'preventScrolling': false
      });
      $('select').formSelect();
    });

    // === Otras funciones del formulario === //

    // Habilitado de las funciones de inputmask
    Inputmask().mask(document.querySelectorAll("input"));

    // Cosa extraña para campos prellenados
    M.updateTextFields = M.updateTextFields;

    // Telefono
    var valTelefono = document.getElementById("telefono");
    Inputmask({ "mask": "+(99) 99 9999 9999", showMaskOnHover: false }).mask(valTelefono);

  }

  // === Funciones para la webcam === //

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
