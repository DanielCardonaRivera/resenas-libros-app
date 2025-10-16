import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <nav class="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
    <a routerLink="/books" class="font-semibold text-lg hover:text-green-400 transition">
      📚 BookApp
    </a>

    <div *ngIf="user; else guest" class="flex items-center gap-3">
      <a routerLink="/profile" class="hover:text-green-400 transition">
        👤 {{ user.username }}
      </a>
      <button 
        (click)="logout()" 
        class="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition">
        Cerrar sesión
      </button>
    </div>

    <ng-template #guest>
      <a routerLink="/login" class="text-green-400 hover:underline">Iniciar sesión</a>
    </ng-template>
  </nav>
  `
})
export class Navbar {
  user: any = null;

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
