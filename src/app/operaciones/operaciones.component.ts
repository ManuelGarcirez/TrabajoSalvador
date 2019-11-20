import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  v1 = 230;
  v2 = 430;
  sum = this.v1 + this.v2;

  constructor() { }

  ngOnInit() {
  }

}
