import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerais-cliente',
  templateUrl: './gerais-cliente.component.html',
  styleUrls: ['./gerais-cliente.component.scss']
})
export class GeraisClienteComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
