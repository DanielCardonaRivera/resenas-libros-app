import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, FormsModule, RouterLink]
})
export class Login {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (u: any) => u.email === this.email && u.password === this.password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert(`👋 Bienvenido ${user.username}`);
      this.router.navigate(['/books']);
    } else {
      alert('❌ Correo o contraseña incorrectos');
    }
  }
}