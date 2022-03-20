import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-preco',
  templateUrl: './tipos-preco.component.html',
  styleUrls: ['./tipos-preco.component.scss']
})
export class TiposPrecoComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
