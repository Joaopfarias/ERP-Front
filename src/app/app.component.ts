import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';

  mostrarMenu: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    // recebendo o resultado após efetuar login ou logout
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => {
        // inserindo o menu de usuario no local storage para evitar varios logins
        if (mostrar == true) {
          localStorage.setItem('mostrarMenu', 'sim')
        } else {
          localStorage.setItem('mostrarMenu', 'nao')
        }
        // alterando o valor do menu
        let teste = localStorage.getItem('mostrarMenu')
        if (teste == 'sim') {
          this.mostrarMenu = true
        } else {
          this.mostrarMenu = false
        }
      }
    )
    // alterando o valor do menu caso nenhum evento seja executado (login e logout)
    let teste = localStorage.getItem('mostrarMenu')
    if (teste == 'sim') {
      this.mostrarMenu = true
    } else {
      this.mostrarMenu = false
    }
  }
}
