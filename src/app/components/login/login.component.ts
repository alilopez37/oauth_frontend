import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports:[CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  isLoggedIn: boolean = false; // Variable para manejar el estado de login

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {
    // Verificar si el usuario está logueado
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.handleRedirect(); // Verifica si el usuario fue redirigido por Google
  }

  // Llamada al servicio para iniciar el proceso de login
  login() {
    this.authService.login();
  }

  // Llamada al servicio para cerrar sesión
  logout() {
    this.authService.logout();
    this.isLoggedIn = false; // Actualiza el estado del login
  }
}
