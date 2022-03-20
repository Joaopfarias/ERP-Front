import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-nao-pagos',
  templateUrl: './lancamentos-nao-pagos.component.html',
  styleUrls: ['./lancamentos-nao-pagos.component.scss']
})
export class LancamentosNaoPagosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
