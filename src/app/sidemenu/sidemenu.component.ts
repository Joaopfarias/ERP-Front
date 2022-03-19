import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginService.logout()
  }
}
