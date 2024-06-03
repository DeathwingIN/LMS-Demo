import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // Corrected from 'styleUrl' to 'styleUrls' and made it an array
})
export class HomeComponent {

  imageSrc1 = 'assets/logo.png';


}
