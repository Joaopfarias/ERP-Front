import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios-folhas',
  templateUrl: './funcionarios-folhas.component.html',
  styleUrls: ['./funcionarios-folhas.component.scss']
})
export class FuncionariosFolhasComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
