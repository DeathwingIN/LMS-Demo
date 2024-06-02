import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  logout() {
    this.authService.logout().then(() => {
      // Optionally, you can add navigation to the login or home page here
      // this.router.navigate(['/login']);
    });
  }
}
