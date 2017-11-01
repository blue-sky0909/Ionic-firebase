var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LandingPage } from '../pages/landing/landing';
import { SettingPage } from '../pages/setting/setting';
import { ModalPage } from '../pages/modal/modal';
import { UserProvider } from '../providers/user/user';
// AF2 Settings
export var firebaseConfig = {
    apiKey: "AIzaSyDSt9GELzSVkWoxbEkqzufc2vwAE4atVxw",
    authDomain: "hair-909ae.firebaseapp.com",
    databaseURL: "https://hair-909ae.firebaseio.com",
    projectId: "hair-909ae",
    storageBucket: "hair-909ae.appspot.com",
    messagingSenderId: "174120557504"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                LoginPage,
                LandingPage,
                SettingPage,
                ModalPage
            ],
            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(MyApp),
                AngularFireModule.initializeApp(firebaseConfig),
                AngularFireDatabaseModule,
                AngularFireDatabase,
                AngularFireAuthModule,
                AngularFireAuth
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                LoginPage,
                LandingPage,
                SettingPage,
                ModalPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                UserProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map