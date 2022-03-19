import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeira',
  templateUrl: './bandeira.component.html',
  styleUrls: ['./bandeira.component.scss']
})
export class BandeiraComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
