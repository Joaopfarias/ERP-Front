import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comissoes-previstas',
  templateUrl: './comissoes-previstas.component.html',
  styleUrls: ['./comissoes-previstas.component.scss']
})
export class ComissoesPrevistasComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
