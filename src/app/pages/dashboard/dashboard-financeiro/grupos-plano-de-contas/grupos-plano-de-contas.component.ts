import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos-plano-de-contas',
  templateUrl: './grupos-plano-de-contas.component.html',
  styleUrls: ['./grupos-plano-de-contas.component.scss']
})
export class GruposPlanoDeContasComponent implements OnInit {
  items: any = [{ show: false }, { show: false }, { show: false }]

  constructor() { }

  ngOnInit(): void {
  }

}
