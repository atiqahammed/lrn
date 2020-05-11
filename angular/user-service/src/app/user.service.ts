import { Injectable } from '@angular/core';
import { of as observableOf, from } from 'rxjs'
import { map } from 'rxjs/operators'
import { auth } from 'firebase'
import { AngularFireAuth } from 'angularfire2/auth'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public uid = observableOf(this.afAuth.authState.pipe(
    map(authState => {
      if(!authState) {
        return null;
      } else {
        return authState.uid;
      }
    })
  ))
  
  public isAdmin = observableOf(true);

  constructor(private afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  } 

  logout() {
    this.afAuth.auth.signOut()
  }
}
