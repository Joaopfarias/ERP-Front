import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependente',
  templateUrl: './dependente.component.html',
  styleUrls: ['./dependente.component.scss']
})
export class DependenteComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
