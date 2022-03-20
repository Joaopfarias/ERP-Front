import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas-canceladas',
  templateUrl: './notas-canceladas.component.html',
  styleUrls: ['./notas-canceladas.component.scss']
})
export class NotasCanceladasComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
