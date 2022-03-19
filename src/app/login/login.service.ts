import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(){
    localStorage.setItem('mostrarMenu', 'sim')
    this.router.navigate(['/dashboard']);
    this.mostrarMenuEmitter.emit(true)
  }
  logout(){
    localStorage.removeItem("mostrarMenu");
    localStorage.clear();
    this.mostrarMenuEmitter.emit(false)
    this.router.navigate(['/'])
  }
}
