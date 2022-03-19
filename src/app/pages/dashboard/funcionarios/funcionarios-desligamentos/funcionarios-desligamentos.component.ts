import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-desligamentos',
  templateUrl: './funcionarios-desligamentos.component.html',
  styleUrls: ['./funcionarios-desligamentos.component.scss']
})
export class FuncionariosDesligamentosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
