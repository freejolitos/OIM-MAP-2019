import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { getConnectionManager, getConnection } from 'typeorm';
import { AuthService } from './auth/auth.service';
import { UserService } from './services/user-service.service';
import { User } from './models/user';

declare var M: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentUser: any;

  constructor(
    private router: Router,
    public authService: AuthService,
    public _userServic: UserService
  ) {
  }

  // /Home
  async conHome() {
    if (getConnectionManager().has("default")) {
      await console.log('XXX CERRRANDO CONEXION XXX')
      await getConnection().close()
        .then(() => {
          this.router.navigateByUrl('/Home') 
        })
        .catch(err => {
          console.log('ERROR AL CERRAR LA CONEXION')
          console.warn(err)
          if (this.rutaActual == '/Home') {
            location.reload()
          } else {
            this.router.navigateByUrl('/Home')
          }
        })
    } else {
      await console.log('YYY NO TUVIMOS QUE CERRAR NADA YYY')
      await this.router.navigateByUrl('/Home')
    }
  }

  // /Citas
  async conCitas() {
    if (getConnectionManager().has("default")) {
      await console.log('XXX CERRRANDO CONEXION XXX')
      await getConnection().close()
        .then(() => {
          this.router.navigateByUrl('/listadoCitas') 
        })
        .catch(err => {
          console.log('ERROR AL CERRAR LA CONEXION')
          console.warn(err)
          if (this.rutaActual == '/listadoCitas') {
            this.router.navigateByUrl('/Home')
          } else {
            this.router.navigateByUrl('/listadoCitas')
          }
        })
    } else {
      await console.log('YYY NO TUVIMOS QUE CERRAR NADA YYY')
      await this.router.navigateByUrl('/listadoCitas')
    }
  }

  // /inicioEntrevistas
  async conInicio() {
    if (getConnectionManager().has("default")) {
      await console.log('XXX CERRRANDO CONEXION XXX')
      await getConnection().close()
        .then(() => {
          this.router.navigateByUrl('/inicioEntrevistas') 
        })
        .catch(err => {
          console.log('ERROR AL CERRAR LA CONEXION')
          console.warn(err)
          if (this.rutaActual == '/inicioEntrevistas') {
            this.router.navigateByUrl('/Home')
          } else {
            this.router.navigateByUrl('/inicioEntrevistas')
          }
        })
    } else {
      await console.log('YYY NO TUVIMOS QUE CERRAR NADA YYY')
      await this.router.navigateByUrl('/inicioEntrevistas')
    }
  }

  // /Monitoreo
  async conMonitoreo() {
    if (getConnectionManager().has("default")) {
      await console.log('XXX CERRRANDO CONEXION XXX')
      await getConnection().close()
        .then(() => {
          this.router.navigateByUrl('/Monitoreo') 
        })
        .catch(err => {
          console.log('ERROR AL CERRAR LA CONEXION')
          console.warn(err)
          if (this.rutaActual == '/Monitoreo') {
            this.router.navigateByUrl('/Home')
          } else {
            this.router.navigateByUrl('/Monitoreo')
          }
        })
    } else {
      await console.log('YYY NO TUVIMOS QUE CERRAR NADA YYY')
      await this.router.navigateByUrl('/Monitoreo')
    }
  }

  // /informacionGeneral
  async conInformacion() {
    if (getConnectionManager().has("default")) {
      await console.log('XXX CERRRANDO CONEXION XXX')
      await getConnection().close()
        .then(() => {
          this.router.navigateByUrl('/informacionGeneral') 
        })
        .catch(err => {
          console.log('ERROR AL CERRAR LA CONEXION')
          console.warn(err)
          if (this.rutaActual == '/informacionGeneral') {
            this.router.navigateByUrl('/Home')
          } else {
            this.router.navigateByUrl('/informacionGeneral')
          }
        })
    } else {
      await console.log('YYY NO TUVIMOS QUE CERRAR NADA YYY')
      await this.router.navigateByUrl('/informacionGeneral')
    }
  }

  // /Configuracion
  async conConfiguracion() {
    if (getConnectionManager().has("default")) {
      await console.log('XXX CERRRANDO CONEXION XXX')
      await getConnection().close()
        .then(() => {
          this.router.navigateByUrl('/Configuracion') 
        })
        .catch(err => {
          console.log('ERROR AL CERRAR LA CONEXION')
          console.warn(err)
          if (this.rutaActual == '/Configuracion') {
            this.router.navigateByUrl('/Home')
          } else {
            this.router.navigateByUrl('/Configuracion')
          }
        })
    } else {
      await console.log('YYY NO TUVIMOS QUE CERRAR NADA YYY')
      await this.router.navigateByUrl('/Configuracion')
    }
  }

  // /Login
  async conLogin() {
    if (getConnectionManager().has("default")) {
      await console.log('XXX CERRRANDO CONEXION XXX')
      await getConnection().close()
        .then(() => {
          this.router.navigateByUrl('/Login') 
        })
        .catch(err => {
          console.log('ERROR AL CERRAR LA CONEXION')
          console.warn(err)
          this.router.navigateByUrl('/Login')
        })
    } else {
      await console.log('YYY NO TUVIMOS QUE CERRAR NADA YYY')
      await this.router.navigateByUrl('/Login')
    }
  }

  async closeConn() {
    if (getConnectionManager().has("default")) {
      await console.log('XXX CERRRANDO CONEXION XXX')
      await getConnection().close()
        .then(() => {
          this.router.navigateByUrl('/Home') 
        })
        .catch(err => {
          console.log('ERROR AL CERRAR LA CONEXION')
          console.warn(err)
          if (this.rutaActual == '/Home') {
            location.reload()
          } else {
            this.router.navigateByUrl('/Home')
          }
        })
    } else {
      await console.log('YYY NO TUVIMOS QUE CERRAR NADA YYY')
      await this.router.navigateByUrl('/Home')
    }
  }
  

  // Variable para la ruta (Se propaga en toda la app)
  rutaActual: any

  ngOnInit() {

    this.currentUser = this._userServic.getUserLoggedIn();
    console.log(this.currentUser)

    $(document).ready(function () {

      // Init de materialize sidenav
      $('.sidenav').sidenav({
        'edge': 'left' // Sidenav se carga del lado izquierdo
      });

    });


    // Con esta funcion se lee la ruta actual
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log(val.urlAfterRedirects);
        this.rutaActual = val.urlAfterRedirects;
      }
    });

  }


}
