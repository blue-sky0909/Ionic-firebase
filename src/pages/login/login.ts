import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { LandingPage } from '../landing/landing';
import { UserProvider } from '../../providers/user/user';
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public btnColor: string = 'btnColor';
  public hasError: boolean = false;
  public error: string = "";

  account: { email: string, password: string } = {
    email: 'admin@admin.com',
    password: 'admin123'
  };

  constructor(
    public navCtrl: NavController,
    public up: UserProvider,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
  }

  login() {
  //  this.navCtrl.push(LandingPage)
    this.up.login(this.account).then(
      (user) => {
        const currentUser = user.uid
        localStorage.setItem('uid', currentUser)
        this.navCtrl.push(LandingPage)
      },
      (err) => {
        this.hasError = true;
        this.error = err.message;
      }
    )
  }

  resetPassword() {
    const alert = this.alertCtrl.create({
      title: 'Reset Password',
      subTitle: 'Please insert your email address.',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.up.resetPassword(data.username).then((res: any) => {
              let message
              if(res == true) {
                message = 'We just sent message to your email.Please check your email'                
              } else {
                message = res.message
              }
              const toast = this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'bottom',
                cssClass: 'toast.scss'
              });
              toast.present();
            })            
          }
        }
      ]
    });
    alert.present();
  }

  signUp() {
    this.navCtrl.push(SignUpPage)
  }
}
