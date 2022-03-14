import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivos-desconto',
  templateUrl: './motivos-desconto.component.html',
  styleUrls: ['./motivos-desconto.component.scss']
})
export class MotivosDescontoComponent implements OnInit {
  items: any = [{ show: false }, { show: false }, { show: false }]

  constructor() { }

  ngOnInit(): void {
  }

}
