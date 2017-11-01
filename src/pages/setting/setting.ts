import { Component } from '@angular/core';
import {Autosize} from 'ionic2-autosize';
import { NavController, ViewController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { UserProvider } from '../../providers/user/user';
import { FileProgressProvider } from '../../providers/file-progress/file-progress';


@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  public btnColor: string = 'btnColor';
  public waterMarkImg: any
  public loader: any
  public toast: any
  public file: any

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController, 
    public fp: FileProgressProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public up: UserProvider
  ) {

  }

  createLoader() { 
     this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
  }

  createToast() {
    this.toast = this.toastCtrl.create({
      message: 'Image was uploaded successfully',
      duration: 3000,
      position: 'bottom',
      cssClass: 'toast.scss'
    });
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

  logout() {
    this.up.logout().then(
      (result) => {
        this.navCtrl.push(LoginPage)
      }
    )
  }

  fileChange(event) { 
    this.file = event.target.files[0]
  }

  saveMarkImg() {    
    this.createLoader()
    this.loader.present()
    this.fp.waterMarkUpload(this.file).then((res)=> {
      if(res == true) {
        this.loader.dismiss()
        this.toast.present()
      }
    })
    .catch(err => {
      this.loader.dismiss()
    });
  }

}
