import { Component, OnInit } from '@angular/core';
import { Globals } from '../shared/helpers/globals';

@Component({
  selector: 'app-terceirapagina',
  templateUrl: './terceirapagina.component.html',
  styleUrls: ['./terceirapagina.component.scss']
})
export class TerceirapaginaComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit(): void {
  }

}
