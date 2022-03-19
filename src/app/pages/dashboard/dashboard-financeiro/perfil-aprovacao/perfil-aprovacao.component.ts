import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-aprovacao',
  templateUrl: './perfil-aprovacao.component.html',
  styleUrls: ['./perfil-aprovacao.component.scss']
})
export class PerfilAprovacaoComponent implements OnInit {
  items: any = [{ show: false }, { show: false }, { show: false }]

  constructor() { }

  ngOnInit(): void {
  }

}
