import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { CanActivate } from '@angular/router'; // Changed from `CanActivateFn`

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate { // Changed to implement `CanActivate`
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): any { // Changed to implement `canActivate()`
    return this.authService.getUser().pipe(
      take(1),
      map(user => {
        if (user) {
          return true;
        } else {
          return this.router.createUrlTree(['/login']); // Changed `router` to `this.router`
        }
      })
    );
  }
}
