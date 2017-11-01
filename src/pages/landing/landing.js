var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { ModalPage } from '../modal/modal';
import { LoginPage } from '../login/login';
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    LandingPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(ModalPage);
        modal.present();
    };
    LandingPage.prototype.goToPage = function () {
        this.navCtrl.push(SettingPage);
    };
    LandingPage.prototype.logout = function () {
        this.navCtrl.push(LoginPage);
    };
    LandingPage = __decorate([
        Component({
            selector: 'page-landing',
            templateUrl: 'landing.html'
        }),
        __metadata("design:paramtypes", [NavController, ModalController])
    ], LandingPage);
    return LandingPage;
}());
export { LandingPage };
//# sourceMappingURL=landing.js.map