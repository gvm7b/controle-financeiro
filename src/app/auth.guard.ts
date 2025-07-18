import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const usuario = localStorage.getItem('usuario');
    if(usuario) {
      return true;
      
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
};
