import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FirebaseAuth } from '@angular/fire';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
     user$: Observable<any>;

     constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
          this.user$ = this.afAuth.authState.pipe(
               switchMap(user => {
                    if (user) {
                         return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                    } else {
                         return of(null);
                    }
               })
          );
     }

     async googleSignin() {
          const provider = new auth.GoogleAuthProvider();
          const credential = await this.afAuth.auth.signInWithPopup(provider);
          return this.updateUserData(credential.user);
     }

     async signout(): Promise<boolean> {
          await this.afAuth.auth.signOut();
          return this.router.navigate(['/']);
     }

     private updateUserData({ uid, email, displayName }: User) {
          const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
          const data = { uid, email, displayName };
          return userRef.set(data, { merge: true });
     }
}
