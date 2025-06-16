import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ LoginComponent, RouterOutlet ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
