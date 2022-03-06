import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reinf',
  templateUrl: './reinf.component.html',
  styleUrls: ['./reinf.component.scss']
})
export class ReinfComponent implements OnInit {
  items = [{}, {}, {}, {}, {}, {}, {}, {}]
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
