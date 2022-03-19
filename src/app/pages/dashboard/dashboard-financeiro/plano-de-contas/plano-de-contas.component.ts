import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plano-de-contas',
  templateUrl: './plano-de-contas.component.html',
  styleUrls: ['./plano-de-contas.component.scss']
})
export class PlanoDeContasComponent implements OnInit {
  items: any = [{ show: false }, { show: false }, { show: false }]

  constructor() { }

  ngOnInit(): void {
  }

}
