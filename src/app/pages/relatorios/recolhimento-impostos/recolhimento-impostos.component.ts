import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recolhimento-impostos',
  templateUrl: './recolhimento-impostos.component.html',
  styleUrls: ['./recolhimento-impostos.component.scss']
})
export class RecolhimentoImpostosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
