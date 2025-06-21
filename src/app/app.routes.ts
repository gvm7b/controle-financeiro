import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { GastosComponent } from "./components/gastos/gastos.component";
import { AuthGuard } from "./auth.guard";


export const routes: Routes = [
  { path: '', component: HomeComponent }, // agora o home é a página inicial
  { path: 'login', component: LoginComponent },
  { path: 'gastos', component: GastosComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];