import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamentos-gmp',
  templateUrl: './orcamentos-gmp.component.html',
  styleUrls: ['./orcamentos-gmp.component.scss'],
})
export class OrcamentosGMPComponent implements OnInit {
  items = [{}, {}, {}]

  isActive: string = 'inactive';
  tabs = []
  constructor() {
  }


  ngOnInit(): void {
  }

  changeTab(data:boolean){
    
  this.tabs = []
    this.isActive = 'active'
  }
}
