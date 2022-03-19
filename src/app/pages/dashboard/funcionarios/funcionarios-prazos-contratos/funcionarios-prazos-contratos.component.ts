import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-prazos-contratos',
  templateUrl: './funcionarios-prazos-contratos.component.html',
  styleUrls: ['./funcionarios-prazos-contratos.component.scss']
})
export class FuncionariosPrazosContratosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
