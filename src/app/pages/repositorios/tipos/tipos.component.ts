import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.scss']
})
export class TiposComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
