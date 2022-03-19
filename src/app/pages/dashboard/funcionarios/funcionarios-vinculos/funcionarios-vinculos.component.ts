import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-vinculos',
  templateUrl: './funcionarios-vinculos.component.html',
  styleUrls: ['./funcionarios-vinculos.component.scss']
})
export class FuncionariosVinculosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
