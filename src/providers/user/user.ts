import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserProvider {

  constructor(public http: Http, public afAuth: AngularFireAuth) {
  }

  login(creds) {
    return this.afAuth.auth.signInWithEmailAndPassword(creds.email, creds.password)
  }

  register(creds) {
    return this.afAuth.auth.createUserWithEmailAndPassword(creds.email, creds.password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  resetPassword(email) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.sendPasswordResetEmail(email).then(function() {
        resolve(true)
      }).catch(function(error) {
        resolve(error)
      });
    })    
  }

}
