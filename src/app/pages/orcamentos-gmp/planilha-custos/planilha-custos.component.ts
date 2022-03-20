import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planilha-custos',
  templateUrl: './planilha-custos.component.html',
  styleUrls: ['./planilha-custos.component.scss']
})
export class PlanilhaCustosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
