import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locais-cobranca',
  templateUrl: './locais-cobranca.component.html',
  styleUrls: ['./locais-cobranca.component.scss']
})
export class LocaisCobrancaComponent implements OnInit {
  items: any = [{ show: false }, { show: false }, { show: false }]

  constructor() { }

  ngOnInit(): void {
  }

}
