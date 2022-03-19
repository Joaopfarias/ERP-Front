import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subgrupos-plano-de-contas',
  templateUrl: './subgrupos-plano-de-contas.component.html',
  styleUrls: ['./subgrupos-plano-de-contas.component.scss']
})
export class SubgruposPlanoDeContasComponent implements OnInit {
  items: any = [{ show: false }, { show: false }, { show: false }]

  constructor() { }

  ngOnInit(): void {
  }

}
