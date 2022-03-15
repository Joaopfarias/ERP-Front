import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametrizacao',
  templateUrl: './parametrizacao.component.html',
  styleUrls: ['./parametrizacao.component.scss']
})
export class ParametrizacaoComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
