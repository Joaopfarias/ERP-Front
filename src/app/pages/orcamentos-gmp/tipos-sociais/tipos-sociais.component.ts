import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-sociais',
  templateUrl: './tipos-sociais.component.html',
  styleUrls: ['./tipos-sociais.component.scss']
})
export class TiposSociaisComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
