import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service.service';
import { User } from '../../models/user';


// Entidades de la base de datos
import { DatabaseService } from '../../data-access/database.service';
import { Usuarios } from '../../data-access/entities/user.entity';
import { getConnection, getConnectionManager } from 'typeorm';

declare var $: any;
declare var M: any;

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
  providers: [
    DatabaseService
  ]
})
export class ConfiguracionComponent implements OnInit {

  currentUser: User;

  constructor(
    private router: Router,
    private _database: DatabaseService,
    public _userServic: UserService
  ) {
    this.currentUser = this._userServic.getUserLoggedIn();
    console.log(this.currentUser)
  }

  datosUsuario: Usuarios[] = [];

  async getDatosUsuario(username: any) {
    const consulta = await this._database.connection
    const rCurrentUser = await consulta.createQueryBuilder()
      .select("usuario")
      .from(Usuarios, "usuario")
      .where("usuario.username = :username", { username: username })
      .getMany();
    this.datosUsuario = await rCurrentUser;
  }


  patronEspecial = "^[A-Za-z\u00C0-\u024F´  ]+$"

  formUsuario = new FormGroup({
    nombres: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.patronEspecial),
        Validators.required
      ]),
    apellidos: new FormControl('',
      [
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(this.patronEspecial)
      ])
  })

  async guardarUsuario(formulario) {
    const guardarUsuario = await getConnection()
    const respuesta = await guardarUsuario.createQueryBuilder()
      .update(Usuarios)
      .set(formulario)
      .where("username = :username", { username: this.currentUser.username })
      .execute();

    await guardarUsuario.close();
    await M.toast({ html: 'Usuario actualizado con exito', classes: 'rounded' });
    // await this.router.navigateByUrl('/entrevista/listadoMenorNA');
    await location.reload();

  }

  async btnImportar() {
    if (getConnectionManager().has("default")) {
      await console.log('XXX Cerrando conexion y entrando a importaciones')
      await getConnection().close()
        .then(() => {
          this.router.navigateByUrl('/importarDB')
        })
        .catch(err => {
          console.log('Error al cerrar la conexion')
          console.warn(err)
          this.router.navigateByUrl('/importarDB')
        })
    } else {
      this.router.navigateByUrl('/importarDB')
    }
  }

  async btnExportar() {
    if (getConnectionManager().has("default")) {
      await console.log('XXX Cerrando conexion y entrando a importaciones')
      await getConnection().close()
        .then(() => {
          this.router.navigateByUrl('/exportarDB')
        })
        .catch(err => {
          console.log('Error al cerrar la conexion')
          console.warn(err)
          this.router.navigateByUrl('/exportarDB')
        })
    } else {
      this.router.navigateByUrl('/exportarDB')
    }
  }

  submitForm() {
    this.guardarUsuario(this.formUsuario.getRawValue());
  }

  ngOnInit() {

    this.getDatosUsuario(this.currentUser.username);

    $(document).ready(function () {
      $('.modal').modal({
        'preventScrolling': false
      });
    });
  }

}
