import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs'; // Import 'of' from 'rxjs'
import { AuthService } from './auth.service';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.getUser().pipe(
      take(1),
      switchMap(user => {
        if (user) {
          return this.authService.getUserData(user.uid).pipe(
            take(1),
            map(userDoc => {
              const userData = userDoc.data();
              if (userData && userData.role === 'teacher') {
                return true;
              } else if (userData && userData.role === 'student') {
                return this.router.createUrlTree(['/student', user.uid]);
              }
              return this.router.createUrlTree(['/login']);
            })
          );
        } else {
          return of(this.router.createUrlTree(['/login'])); // Wrap UrlTree in 'of()'
        }
      })
    );
  }
}
