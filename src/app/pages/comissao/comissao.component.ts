import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comissao',
  templateUrl: './comissao.component.html',
  styleUrls: ['./comissao.component.scss']
})
export class ComissaoComponent implements OnInit {
  items = [{}, {}, {}]
  top10: number = 10
  top400: number = 400
  click: boolean = false
  arrowTo: string = 'down'

  constructor() { }

  ngOnInit(): void {
  }

  clickDblClick() {
    if (this.click == false) {
      this.click = true;
      this.arrowTo = 'up'
    } else {
      this.arrowTo = 'down'
      this.click = false;
    }
  }

}
