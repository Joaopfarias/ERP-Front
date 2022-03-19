import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidades-negocios',
  templateUrl: './unidades-negocios.component.html',
  styleUrls: ['./unidades-negocios.component.scss']
})
export class UnidadesNegociosComponent implements OnInit {
  items: any = [{ show: false }, { show: false }, { show: false }]

  constructor() { }

  ngOnInit(): void {
  }

}
