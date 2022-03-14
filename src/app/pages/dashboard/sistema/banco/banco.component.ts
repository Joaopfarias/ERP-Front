import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.scss']
})
export class BancoComponent implements OnInit {
  items = [{}, {}, {}]
  isExpanded: any = 'nao'


  constructor() { }

  ngOnInit(): void {
  }

  expandCell(data: string) {
    this.isExpanded = data
  }

}
