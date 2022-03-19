import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-notas-fiscais',
  templateUrl: './servicos-notas-fiscais.component.html',
  styleUrls: ['./servicos-notas-fiscais.component.scss']
})
export class ServicosNotasFiscaisComponent implements OnInit {
  items: any = [{ show: false }, { show: false }, { show: false }]

  constructor() { }

  ngOnInit(): void {
  }

}
