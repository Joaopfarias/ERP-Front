import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos-preco',
  templateUrl: './grupos-preco.component.html',
  styleUrls: ['./grupos-preco.component.scss']
})
export class GruposPrecoComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
