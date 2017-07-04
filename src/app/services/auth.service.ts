import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  usuario: any = null;

  constructor(public afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res => {
        this.usuario = {};
        this.usuario.usuario = res.user.displayName;
        this.usuario.email = res.user.email;
        console.log(res);

        localStorage.setItem('usuario', JSON.stringify(this.usuario));
      }
    );
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('usuario');
    this.usuario = null;
  }

  authenticated() {
    if (JSON.parse(localStorage.getItem('usuario'))) {
      return true;
    } else {
      return false;
    }
  }

}
