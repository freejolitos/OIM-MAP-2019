import { Component, OnInit } from '@angular/core';

declare var M: any 
declare var $: any

@Component({
  selector: 'app-fin',
  templateUrl: './fin.component.html',
  styleUrls: ['./fin.component.css']
})
export class FinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.modal').modal();

    });
  }

}
