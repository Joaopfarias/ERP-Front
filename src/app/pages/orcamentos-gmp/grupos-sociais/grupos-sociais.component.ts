import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos-sociais',
  templateUrl: './grupos-sociais.component.html',
  styleUrls: ['./grupos-sociais.component.scss']
})
export class GruposSociaisComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
