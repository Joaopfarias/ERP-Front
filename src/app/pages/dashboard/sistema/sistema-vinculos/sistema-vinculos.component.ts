import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema-vinculos',
  templateUrl: './sistema-vinculos.component.html',
  styleUrls: ['./sistema-vinculos.component.scss']
})
export class SistemaVinculosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
