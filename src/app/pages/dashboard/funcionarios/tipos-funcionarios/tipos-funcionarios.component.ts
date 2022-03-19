import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-funcionarios',
  templateUrl: './tipos-funcionarios.component.html',
  styleUrls: ['./tipos-funcionarios.component.scss']
})
export class TiposFuncionariosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
