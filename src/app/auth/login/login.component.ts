import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  async onLogin() {
    try {
      const userCredential = await this.authService.login(this.email, this.password).toPromise();
      const user = userCredential.user;

      if (user) {
        const userDoc = await this.authService.getUserData(user.uid).toPromise();
        const userData = userDoc.data();

        if (userData) {
          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000,
          });

          if (userData.role === 'student') {
            await this.router.navigate(['/student', user.uid]);
          } else if (userData.role === 'teacher') {
            await this.router.navigate(['/teacher', user.uid]);
          }
        }
      }
    } catch (error) {
      this.errorMessage = 'Login failed. Please try again.';
      console.error('Login Error:', error);
    }
  }
}
