import { Component, OnInit } from '@angular/core';

declare var $: any // para jQuery
declare var M: any // para Materialize

@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['./informacion-general.component.css']
})
export class InformacionGeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $('.modal').modal({
        'preventScrolling': false
      });
    });

  }

}
