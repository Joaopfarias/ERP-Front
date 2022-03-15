import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-natureza',
  templateUrl: './natureza.component.html',
  styleUrls: ['./natureza.component.scss']
})
export class NaturezaComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
