import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios-lancamentos-bancarios',
  templateUrl: './relatorios-lancamentos-bancarios.component.html',
  styleUrls: ['./relatorios-lancamentos-bancarios.component.scss']
})
export class RelatoriosLancamentosBancariosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
