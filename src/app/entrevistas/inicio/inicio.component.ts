import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var M: any // Variable para materialize
declare var $: any // Variable para jQuery

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    $(document).ready(function(){
      $('.modal').modal({
        'preventScrolling': false
      });
    });

    // console.log(this.router.url);

  }

}
