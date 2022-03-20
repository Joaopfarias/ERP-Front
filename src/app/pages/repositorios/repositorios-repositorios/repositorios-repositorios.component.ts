import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositorios-repositorios',
  templateUrl: './repositorios-repositorios.component.html',
  styleUrls: ['./repositorios-repositorios.component.scss']
})
export class RepositoriosRepositoriosComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
