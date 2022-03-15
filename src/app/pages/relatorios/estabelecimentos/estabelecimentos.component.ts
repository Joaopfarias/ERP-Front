import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.component.html',
  styleUrls: ['./estabelecimentos.component.scss']
})
export class EstabelecimentosComponent implements OnInit {
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
