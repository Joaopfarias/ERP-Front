import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exame-medico',
  templateUrl: './exame-medico.component.html',
  styleUrls: ['./exame-medico.component.scss']
})
export class ExameMedicoComponent implements OnInit {
  items = [{}, {}, {}]

  constructor() { }

  ngOnInit(): void {
  }

}
