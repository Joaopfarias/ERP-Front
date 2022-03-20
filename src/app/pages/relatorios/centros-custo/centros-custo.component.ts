import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros-custo',
  templateUrl: './centros-custo.component.html',
  styleUrls: ['./centros-custo.component.scss']
})
export class CentrosCustoComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
