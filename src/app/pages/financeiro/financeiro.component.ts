import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss']
})
export class FinanceiroComponent implements OnInit {
  items = [{}, {}, {}]
  isExpanded: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  expandCell(data: boolean){
    this.isExpanded = data
  }
}
