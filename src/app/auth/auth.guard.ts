import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs'; // Import Observable from 'rxjs'
import { CanActivate,  } from '@angular/router';

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
          return true;
        } else {
          return this.router.createUrlTree(['/login']);
        }
      })
    );
  }
}
