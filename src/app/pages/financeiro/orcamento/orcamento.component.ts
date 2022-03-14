import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit {
  items: any = [{ show: false }, { show: false }, { show: false }]
  isExpanded: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  
  expandCell(i: any) {
    if (this.isExpanded == false) {
      this.items.forEach((element: any, index: any) => {
        if (i == index) {
          this.items[i].show = true
        }
      });
      this.isExpanded = true
    } else {
      this.items.forEach((element: any, index: any) => {
        if (i == index) {
          this.items[i].show = false
        }
      });
      this.isExpanded = false
    }
  }
}
