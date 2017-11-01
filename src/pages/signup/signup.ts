import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { LandingPage } from '../landing/landing';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {

  public btnColor: string = 'btnColor';
  public hasError: boolean = false;
  public error: string = "";
  public confirmPassword: string = "";

  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  constructor(
    public navCtrl: NavController,
    public up: UserProvider,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
  }

  signIn() {
    this.navCtrl.push(LoginPage)
  }

  signup() {
    if(this.account.password != this.confirmPassword) {
      this.error = 'Password is not matched'
      this.hasError = true
    } else {
      this.up.register(this.account).then(
        (res) => {
          this.error = ""
          this.hasError = false
          this.navCtrl.push(LandingPage)
        },
        (err) => {
          this.error = err.message
          this.hasError = true
        }
      )
    }
  }
}
