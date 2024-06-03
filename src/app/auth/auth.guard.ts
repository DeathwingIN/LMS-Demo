import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { CanActivate, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.getUser().pipe(
      take(1),
      map(user => {
        if (user) {
          if (user.role === 'teacher') {
            return true;
          } else if (user.role === 'student') {
            return this.router.createUrlTree(['/student']);
          }
        }
        // If user is not found or does not match any role, redirect to login
        return this.router.createUrlTree(['/login']);
      })
    );
  }
}
