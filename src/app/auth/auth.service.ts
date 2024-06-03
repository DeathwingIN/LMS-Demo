import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../core/models/user.model';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  login(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  register(user: User, password: string): Observable<any> {
    return from(this.afAuth.createUserWithEmailAndPassword(user.email, password)).pipe(
      switchMap((credential) => {
        user.uid = credential.user?.uid || '';
        return this.firestore.collection('users').doc(user.uid).set(Object.assign({}, user));
      })
    );
  }

  getUser(): Observable<any> {
    return this.afAuth.authState;
  }

  getUserData(uid: string): Observable<any> {
    return this.firestore.collection('users').doc(uid).get();
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
