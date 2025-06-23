import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ButtonModule, CommonModule, DividerModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  login() {
    if(this.email === 'admin@gmail.com' && this.senha === '1234'){
      console.log('login deu certo')
      localStorage.setItem('usuario', JSON.stringify({ email: this.email }));
      this.router.navigate(['/gastos']);

    } else {
      alert('Usuario não existe!!!');
    }
  }
}
