import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
})
export class Profile {
  user = {
    name: '',
    email: '',
    username: '',
    password: '',
    photo: 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
  };

  isEditing = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      this.router.navigate(['/login']);
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  saveChanges() {
    localStorage.setItem('loggedInUser', JSON.stringify(this.user));
    this.isEditing = false;
    alert('Perfil actualizado correctamente!');
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
