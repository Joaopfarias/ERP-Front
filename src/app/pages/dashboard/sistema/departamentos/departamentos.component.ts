import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
