import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  async login(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      // Login successful, redirect or handle accordingly
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  }

  async register(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      // Registration successful, redirect or handle accordingly
    } catch (error) {
      console.error('Registration Error:', error);
      throw error;
    }
  }
}
