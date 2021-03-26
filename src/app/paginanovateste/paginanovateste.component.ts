import { Component, OnInit } from '@angular/core';
import { Globals } from '../shared/helpers/globals';

@Component({
  selector: 'app-paginanovateste',
  templateUrl: './paginanovateste.component.html',
  styleUrls: ['./paginanovateste.component.scss']
})
export class PaginanovatesteComponent implements OnInit {

  title = 'variavel-global';
  constructor(public globals: Globals) {

  }

  buttonClick() {
    this.globals.role = 'Aqui eu troquei o valor.'
  }

  ngOnInit(): void {
  }

}
