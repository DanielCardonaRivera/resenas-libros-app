import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const user = localStorage.getItem('loggedInUser');
  if (!user) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
