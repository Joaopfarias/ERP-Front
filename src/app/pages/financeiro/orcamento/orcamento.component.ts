import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit {
  items = [{}, {}, {}]
  isExpanded: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  expandCell(data: boolean){
    this.isExpanded = data
  }
}
