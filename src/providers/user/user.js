var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthProviders, AuthMethods } from 'angularfire2/auth';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http, af) {
        this.http = http;
        this.af = af;
        this.config = {
            provider: AuthProviders.Custom,
            method: AuthMethods.Password
        };
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.login = function (creds) {
        var _this = this;
        console.log(creds);
        var that = this;
        return new Promise(function (resolve, reject) {
            _this.af.auth.login(creds)
                .then(function (result) {
                console.log(result);
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    };
    UserProvider.prototype.logout = function () {
        // return this.af.auth.logout();
    };
    UserProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http, Object])
    ], UserProvider);
    return UserProvider;
}());
export { UserProvider };
//# sourceMappingURL=user.js.map