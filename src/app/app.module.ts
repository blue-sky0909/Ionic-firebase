import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/signup/signup';
import { LandingPage } from '../pages/landing/landing';
import { SettingPage } from '../pages/setting/setting';
import { ModalPage } from '../pages/modal/modal';
import { UserProvider } from '../providers/user/user';
import { FileProgressProvider } from '../providers/file-progress/file-progress';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDSt9GELzSVkWoxbEkqzufc2vwAE4atVxw",
  authDomain: "hair-909ae.firebaseapp.com",
  databaseURL: "https://hair-909ae.firebaseio.com",
  projectId: "hair-909ae",
  storageBucket: "hair-909ae.appspot.com",
  messagingSenderId: "174120557504"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignUpPage,
    LandingPage,
    SettingPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignUpPage,
    LandingPage,
    SettingPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    FileProgressProvider,
    FileTransfer,
    FileTransferObject,
    Camera,
    File
  ]
})
export class AppModule {}
