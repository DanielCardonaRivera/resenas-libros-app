import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { BookList } from './pages/books/book-list/book-list';
import { BookDetail } from './pages/books/book-detail/book-detail';
import { MyReviews } from './pages/my-reviews/my-reviews';
import { Profile } from './pages/profile/profile';
import { AuthGuard } from './core/guards/auth.guard';



export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'books', component: BookList, canActivate: [AuthGuard] },
  { path: 'books/:id', component: BookDetail, canActivate: [AuthGuard] },
  { path: 'book-detail/:id', component: BookDetail, canActivate: [AuthGuard] },
  { path: 'my-reviews/:id', component: MyReviews, canActivate: [AuthGuard] },
  { path: 'profile', component: Profile, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
    ];
