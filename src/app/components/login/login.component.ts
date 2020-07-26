import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service.service';
import { AuthService } from '../../auth/auth.service';

import { User } from '../../models/user';

// Catalogos
import { initCataglogos } from '../../shared/initCats';

// Entidades de la base de datos
import { DatabaseService } from '../../data-access/database.service';
import { vwSQLITE_Status } from '../../data-access/entities/vwSQLITE_SEQUENCE.entity';
import { catCondMigratoria } from '../../data-access/entities/catCondicionMigratoria.entity';
import { catCondMigEsp } from '../../data-access/entities/catCondMigEsp.entity';
import { catCondMigTra } from '../../data-access/entities/catCondicionMigratoriaTramite.entity';
import { catDepartamento } from '../../data-access/entities/catDepartamentos.entity';
import { catFases } from '../../data-access/entities/catFases.entity';
import { catEdoCivil } from '../../data-access/entities/catEdoCivil.entity';
import { catGenero } from '../../data-access/entities/catGenero.entity';
import { catIdioma } from '../../data-access/entities/catIdioma.entity';
import { catMedioIngreso } from '../../data-access/entities/catMedioIngreso.entity';
import { catNacionalidad } from '../../data-access/entities/catNacionalidades.entity';
import { catOrientacionSexual } from '../../data-access/entities/catOrientacionSexual.entity';
import { catPaises } from '../../data-access/entities/catPaises.entity';
import { catParentesco } from 'src/app/data-access/entities/catParentesco.entity';
import { catSiNo } from '../../data-access/entities/catSiNo.entity';
import { Usuarios } from '../../data-access/entities/user.entity';
import { getConnection } from 'typeorm';


declare var M: any; // Materializec
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    DatabaseService,
    initCataglogos
  ]
})
export class LoginComponent implements OnInit {

  message: string;

  validacionUsuarios: Usuarios[] = [];

  vinit_catCondMigratoria = [];
  vinit_catCondMigTra = [];
  vinit_catDepartamento = [];
  vinit_catFases = [];
  vinit_catGenero = [];
  vinit_catNacionalidad = [];
  vinit_catPaises = [];
  vinit_catParentesco = [];
  vinit_catSiNo = [];
  vinit_catEdoCivil = [];
  vinit_catIdioma = [];
  vinit_catOrientacionSexual = [];
  vinit_catMedioIngreso = [];
  vinit_catCondMigEsp = [];
  vinit_Usuarios = [];

  constructor(
    private _cats: initCataglogos,
    private _database: DatabaseService,
    private userService: UserService,
    public authService: AuthService,
    public router: Router
  ) {
    this.setMessage();
  }

  estatusDB: vwSQLITE_Status[] = [];

  async getUsuarios(user: string, password: string, v1: any, v2: any, v3: any, v4: any, v5: any, v6: any, v7: any, v8: any, v9: any, v10: any, v11: any, v12: any, v13: any, v14: any, vinit_Usuarios: any) {
    const consulta = await this._database.connection

    const RcatCondMigratoria = await consulta.createQueryBuilder()
      .select("cat")
      .from(catCondMigratoria, "cat")
      .getMany();
    if (RcatCondMigratoria.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catCondMigratoria)
        .values(v1)
        .execute();
    };

    const RcatCondMigTra = await consulta.createQueryBuilder()
      .select("cat")
      .from(catCondMigTra, "cat")
      .getMany()
    if (RcatCondMigTra.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catCondMigTra)
        .values(v2)
        .execute();
    };

    const RcatDepartamento = await consulta.createQueryBuilder()
      .select("cat")
      .from(catDepartamento, "cat")
      .getMany()
    if (RcatDepartamento.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catDepartamento)
        .values(v3)
        .execute();
    };

    const RcatFases = await consulta.createQueryBuilder()
      .select("cat")
      .from(catFases, "cat")
      .getMany()
    if (RcatFases.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catFases)
        .values(v4)
        .execute();
    };

    const RcatGenero = await consulta.createQueryBuilder()
      .select("cat")
      .from(catGenero, "cat")
      .getMany()
    if (RcatGenero.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catGenero)
        .values(v5)
        .execute();
    };

    const RcatNacionalidad = await consulta.createQueryBuilder()
      .select("cat")
      .from(catNacionalidad, "cat")
      .getRawMany()
    if (RcatNacionalidad.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catNacionalidad)
        .values(v6)
        .execute();
    };

    const RcatPaises = await consulta.createQueryBuilder()
      .select("cat")
      .from(catPaises, "cat")
      .getMany()
    if (RcatPaises.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catPaises)
        .values(v7)
        .execute();
    };

    const RcatParentesco = await consulta.createQueryBuilder()
      .select("cat")
      .from(catParentesco, "cat")
      .getMany()
    if (RcatParentesco.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catParentesco)
        .values(v8)
        .execute();
    };

    const RcatSiNo = await consulta.createQueryBuilder()
      .select("cat")
      .from(catSiNo, "cat")
      .getMany()
    if (RcatSiNo.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catSiNo)
        .values(v9)
        .execute();
    };

    const RcatEdoCivil = await consulta.createQueryBuilder()
      .select("cat")
      .from(catEdoCivil, "cat")
      .getMany()
    if (RcatEdoCivil.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catEdoCivil)
        .values(v10)
        .execute();
    };

    const RcatIdioma = await consulta.createQueryBuilder()
      .select("cat")
      .from(catIdioma, "cat")
      .getMany()
    if (RcatIdioma.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catIdioma)
        .values(v11)
        .execute();
    };

    const RcatOrientacionSexual = await consulta.createQueryBuilder()
      .select("cat")
      .from(catOrientacionSexual, "cat")
      .getMany()
    if (RcatOrientacionSexual.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catOrientacionSexual)
        .values(v12)
        .execute();
    };

    const RcatMedioIngreso = await consulta.createQueryBuilder()
      .select("cat")
      .from(catMedioIngreso, "cat")
      .getMany();
    if (RcatMedioIngreso.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catMedioIngreso)
        .values(v13)
        .execute();
    };

    const RcatCondMigEsp = await consulta.createQueryBuilder()
      .select("cat")
      .from(catCondMigEsp, "cat")
      .getMany();
    if (RcatCondMigEsp.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(catCondMigEsp)
        .values(v14)
        .execute();
    };

    const rUsuarios = await consulta.createQueryBuilder()
      .select("cat")
      .from(Usuarios, "cat")
      .getMany();
    if (rUsuarios.length === 0) {
      await console.log('aqui podemos insertar')
      const insertar = await consulta.createQueryBuilder()
        .insert()
        .into(Usuarios)
        .values(vinit_Usuarios)
        .execute();
    };

    const rConsultaUsuario = await consulta.createQueryBuilder()
      .select("selectUser")
      .from(Usuarios, "selectUser")
      .where("selectUser.username = :username AND selectUser.password = :password", { username: user, password: password })
      .getMany();
    this.validacionUsuarios = rConsultaUsuario

    const estadoActual = await consulta.createQueryBuilder()
      .select("estado")
      .from(vwSQLITE_Status, "estado")
      .getMany();
    this.estatusDB = await estadoActual;

    await console.log(this.estatusDB);
    // await consulta.close();
  }

  setMessage() {
    this.message = (this.authService.isLoggedIn ? 'Sesion iniciada' : 'Por favor inicie sesión');
  }

  patronEspecial = "^[A-Za-z0-9.]+$";

  formInicioSesion = new FormGroup({
    username: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern(this.patronEspecial),
        Validators.required
      ]),
    password: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required
      ])
  })

  // async fnConsultaUsuario 


  login(username: string, password: string) {

    this.getUsuarios(username, password, this.vinit_catCondMigratoria, this.vinit_catCondMigTra, this.vinit_catDepartamento, this.vinit_catFases, this.vinit_catGenero, this.vinit_catNacionalidad, this.vinit_catPaises, this.vinit_catParentesco, this.vinit_catSiNo, this.vinit_catEdoCivil, this.vinit_catIdioma, this.vinit_catOrientacionSexual, this.vinit_catMedioIngreso, this.vinit_catCondMigEsp, this.vinit_Usuarios)
      .then(() => {
        if (this.validacionUsuarios.length != 0) {
          this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
              let u: User = { username: username };
              this.userService.setUserLoggedIn(u);
              // Get the redirect URL from our auth service
              // If no redirect has been set, use the default
              const cerrarConexion = getConnection().close()
              let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/Home';

              // Redirect the user
              this.router.navigateByUrl(redirect);
            }
          })
        } else {
          this.message = 'Usuario o password incorrecto'
        }
      })

  }

  ngOnInit() {
    this.vinit_catCondMigratoria = this._cats.getCondicionMigratoria();
    this.vinit_catCondMigTra = this._cats.getCondicionMigratoriaTramite();
    this.vinit_catDepartamento = this._cats.getDepartamento();
    this.vinit_catFases = this._cats.getFases();
    this.vinit_catGenero = this._cats.getGenero();
    this.vinit_catNacionalidad = this._cats.getNacionalidad();
    this.vinit_catPaises = this._cats.getPaises();
    this.vinit_catParentesco = this._cats.getParentesco();
    this.vinit_catSiNo = this._cats.getSiNo();
    this.vinit_catEdoCivil = this._cats.getEdoCivil();
    this.vinit_catIdioma = this._cats.getIdioma();
    this.vinit_catOrientacionSexual = this._cats.getOrientacionSexual();
    this.vinit_catMedioIngreso = this._cats.getMedioIngreso();
    this.vinit_catCondMigEsp = this._cats.getCondicionMigratoriaEspecifica();
    this.vinit_Usuarios = this._cats.getUsuarios();
  }

}
