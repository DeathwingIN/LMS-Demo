import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../core/models/user.model';
import { from, Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

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
        const userPlainObject = {
          uid: user.uid,
          name: user.name,
          email: user.email,
          role: user.role
        };
        return this.firestore.collection('users').doc(user.uid).set(userPlainObject);
      })
    );
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }

  getUser(): Observable<User | null> {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.firestore.collection<User>('users').doc(user.uid).valueChanges().pipe(
            map((userData) => userData || null) // Convert undefined to null
          );
        } else {
          return of(null);
        }
      })
    );
  }
}
