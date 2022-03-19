import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-situacao',
  templateUrl: './funcionarios-situacao.component.html',
  styleUrls: ['./funcionarios-situacao.component.scss']
})
export class FuncionariosSituacaoComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
