import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
})
export class Register {
  user = {
    name: '',
    email: '',
    username: '',
    password: '',
    photo: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
  };

  constructor(private router: Router) {}

  register() {
    if (this.user.name && this.user.email && this.user.username && this.user.password) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      const exists = users.find((u: any) => u.username === this.user.username);
      if (exists) {
        alert('⚠️ El nombre de usuario ya existe. Elige otro.');
        return;
      }

      users.push(this.user);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('loggedInUser', JSON.stringify(this.user));

      alert('✅ Registro exitoso');
      this.router.navigate(['/books']);
    } else {
      alert('⚠️ Todos los campos son obligatorios');
    }
  }
}
