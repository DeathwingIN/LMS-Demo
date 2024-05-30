import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../../core/models/user.model';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  role: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  async onRegister() {
    try {
      const user = new User('', this.name, this.email, this.role);
      await firstValueFrom(this.authService.register(user, this.password));
      // Handle successful registration
    } catch (error) {
      this.errorMessage = 'Registration failed. Please try again.';
      console.error('Registration Error:', error);
    }
  }
}
