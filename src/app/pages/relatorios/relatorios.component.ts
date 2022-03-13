import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {

  items = [{}, {}, {}]

  isActive: string = 'inactive';
  tabs = []
  constructor() { }

  ngOnInit(): void {
  }


  changeTab(data: boolean) {

    this.tabs = []
    this.isActive = 'active'
  }

}
