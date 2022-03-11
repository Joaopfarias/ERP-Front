import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss']
})
export class RepositoriosComponent implements OnInit {
  items = [{}, {}, {}]
  
  constructor() { }

  ngOnInit(): void {
  }

}
