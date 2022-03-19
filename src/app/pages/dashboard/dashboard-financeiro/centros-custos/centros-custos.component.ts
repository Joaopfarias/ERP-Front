import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros-custos',
  templateUrl: './centros-custos.component.html',
  styleUrls: ['./centros-custos.component.scss']
})
export class CentrosCustosComponent implements OnInit {
  items: any = [{ show: false }, { show: false }, { show: false }]

  constructor() { }

  ngOnInit(): void {
  }

}
