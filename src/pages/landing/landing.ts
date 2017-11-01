import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { SettingPage } from '../setting/setting';
import { ModalPage } from '../modal/modal';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public up: UserProvider) {

  }

  presentModal(type) {
    let modal = this.modalCtrl.create(ModalPage, { type: type });
    modal.present();
  }

  goToPage() {
  	this.navCtrl.push(SettingPage)
  }

  logout() {
    this.up.logout().then(
      (result) => {
        this.navCtrl.push(LoginPage)
      }
    )
  }

}
