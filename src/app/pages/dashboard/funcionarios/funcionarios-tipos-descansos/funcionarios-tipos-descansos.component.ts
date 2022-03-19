import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-tipos-descansos',
  templateUrl: './funcionarios-tipos-descansos.component.html',
  styleUrls: ['./funcionarios-tipos-descansos.component.scss']
})
export class FuncionariosTiposDescansosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
