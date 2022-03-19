import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afastamento',
  templateUrl: './afastamento.component.html',
  styleUrls: ['./afastamento.component.scss']
})
export class AfastamentoComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
