import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-comissao',
  templateUrl: './comissao.component.html',
  styleUrls: ['./comissao.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None
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

  funcao(){
  }


}
