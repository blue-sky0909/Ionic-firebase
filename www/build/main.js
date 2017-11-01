webpackJsonp([1],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_setting__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LandingPage = (function () {
    function LandingPage(navCtrl, modalCtrl, up) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.up = up;
    }
    LandingPage.prototype.presentModal = function (type) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_modal__["a" /* ModalPage */], { type: type });
        modal.present();
    };
    LandingPage.prototype.goToPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__setting_setting__["a" /* SettingPage */]);
    };
    LandingPage.prototype.logout = function () {
        var _this = this;
        this.up.logout().then(function (result) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        });
    };
    return LandingPage;
}());
LandingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-landing',template:/*ion-inline-start:"/Volumes/Work/workspace/Ionic/hair/src/pages/landing/landing.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <ion-buttons start>\n            <button ion-button color="dark" clear (click)="logout()">Logout</button>\n        </ion-buttons>\n        <ion-title text-center>\n            Landing\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button color="dark" clear end (click)="goToPage()">Settings</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <div (click)="presentModal(\'image\')">\n            <img src="assets/imgs/pexels-photo-432605.jpeg" />\n            <div class="card-title">Image</div>\n        </div>        \n    </ion-card>\n    <ion-card>\n        <div (click)="presentModal(\'gif\')">\n            <img src="assets/imgs/pexels-photo-432605.jpeg"/>\n            <div class="card-title">GIF</div>\n        </div>        \n    </ion-card>\n    <ion-card>\n        <div (click)="presentModal(\'video\')">\n            <img src="assets/imgs/pexels-photo-432605.jpeg"/>\n            <div class="card-title">Video</div>\n        </div>        \n    </ion-card>\n    <ion-card>\n        <div (click)="presentModal(\'search\')">\n            <img src="assets/imgs/pexels-photo-432605.jpeg"/>\n            <div class="card-title">Gallery</div>  \n        </div>        \n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/workspace/Ionic/hair/src/pages/landing/landing.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
], LandingPage);

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileProgressProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FileProgressProvider = (function () {
    function FileProgressProvider(http, db, app) {
        this.http = http;
        this.db = db;
        this.app = app;
        this.basePath = '/uploads';
        this.user = localStorage.getItem('uid');
    }
    FileProgressProvider.prototype.imageUpload = function (selectedFile) {
        var _this = this;
        this.basePath = '/uploads/images';
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
        var path = "/" + this.basePath + "/" + this.user + "/" + selectedFile.name;
        var iRef = storageRef.child(path);
        return new Promise(function (resolve, reject) {
            iRef.putString(selectedFile.file.substring(22), 'base64', { contentType: selectedFile.type })
                .then(function (snapshot) {
                _this.db.list(_this.basePath + "/").push({
                    uid: _this.user,
                    url: selectedFile.file,
                    fileName: selectedFile.name,
                    fileType: selectedFile.type,
                    staffId: selectedFile.staffId,
                    fTag: selectedFile.fTag,
                    sTag: selectedFile.sTag,
                    tTag: selectedFile.tTag
                });
                resolve(true);
            }, function (error) {
                resolve(false);
            });
        });
    };
    FileProgressProvider.prototype.videoUpload = function (selectedFile) {
        var _this = this;
        if (selectedFile.fileType == 'gif') {
            this.basePath = '/uploads/gif';
        }
        else {
            this.basePath = '/uploads/video';
        }
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
        var path = "/" + this.basePath + "/" + selectedFile.name;
        var iRef = storageRef.child(path);
        return new Promise(function (resolve, reject) {
            iRef.put(selectedFile.file).then(function (snapshot) {
                console.log(snapshot);
                _this.db.list(_this.basePath + "/").push({
                    uid: _this.user,
                    url: snapshot.downloadURL,
                    fileName: selectedFile.name,
                    fileType: selectedFile.type,
                    staffId: selectedFile.staffId,
                    fTag: selectedFile.fTag,
                    sTag: selectedFile.sTag,
                    tTag: selectedFile.tTag
                });
                resolve(true);
            }, function (error) {
                resolve(false);
            });
        });
    };
    FileProgressProvider.prototype.fileSearch = function (item) {
        var items = [];
        if (item.type == 'image') {
            this.basePath = '/uploads/images';
        }
        else if (item.type == 'gif') {
            this.basePath = '/uploads/gif';
        }
        else {
            this.basePath = '/uploads/video';
        }
        var query = this.app.database().ref("" + this.basePath);
        return new Promise(function (resolve, reject) {
            query.once("value")
                .then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    var childData = childSnapshot.val();
                    items.push(childData);
                });
                resolve(items);
            });
        });
    };
    FileProgressProvider.prototype.waterMarkUpload = function (markFile) {
        var _this = this;
        this.basePath = '/uploads/images/watermark';
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
        var path = "/" + this.basePath + "/" + markFile.name;
        var iRef = storageRef.child(path);
        return new Promise(function (resolve, reject) {
            iRef.put(markFile).then(function (snapshot) {
                _this.db.list(_this.basePath + "/").push({
                    uid: _this.user,
                    url: snapshot.downloadURL
                });
                resolve(true);
            }, function (error) {
                resolve(false);
            });
        });
    };
    FileProgressProvider.prototype.getWaterMarkImg = function () {
        var items = [];
        this.basePath = '/uploads/images/watermark';
        var query = this.app.database().ref("" + this.basePath);
        return new Promise(function (resolve, reject) {
            query.once("value")
                .then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    var childData = childSnapshot.val();
                    items.push(childData);
                });
                resolve(items);
            });
        });
    };
    return FileProgressProvider;
}());
FileProgressProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */]])
], FileProgressProvider);

//# sourceMappingURL=file-progress.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/register/register.module": [
		488,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_file_progress_file_progress__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingPage = (function () {
    function SettingPage(navCtrl, viewCtrl, fp, loadingCtrl, toastCtrl, up) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.fp = fp;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.up = up;
        this.btnColor = 'btnColor';
    }
    SettingPage.prototype.createLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
    };
    SettingPage.prototype.createToast = function () {
        this.toast = this.toastCtrl.create({
            message: 'Image was uploaded successfully',
            duration: 3000,
            position: 'bottom',
            cssClass: 'toast.scss'
        });
    };
    SettingPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingPage.prototype.logout = function () {
        var _this = this;
        this.up.logout().then(function (result) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        });
    };
    SettingPage.prototype.fileChange = function (event) {
        this.file = event.target.files[0];
    };
    SettingPage.prototype.saveMarkImg = function () {
        var _this = this;
        this.createLoader();
        this.loader.present();
        this.fp.waterMarkUpload(this.file).then(function (res) {
            if (res == true) {
                _this.loader.dismiss();
                _this.toast.present();
            }
        })
            .catch(function (err) {
            _this.loader.dismiss();
        });
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"/Volumes/Work/workspace/Ionic/hair/src/pages/setting/setting.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-center>\n            Setting\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button color="dark" clear end (click)="logout()">Logout</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="content">\n    <ion-card>\n        <ion-label stacked class="lablel">Your Salon name</ion-label>\n        <ion-row>\n            <ion-col col-8>\n                <ion-input type="text" [(ngModel)]="companyName" ></ion-input>\n            </ion-col>\n            <ion-col col-4>\n                <button ion-button block [color]="btnColor" (click)="saveCompanyName()">Save</button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <ion-card>\n        <ion-label stacked class="lablel">Your Watermark Image</ion-label>\n        <ion-row>\n            <ion-col col-8>\n                <div class="file-upload">\n                    <ion-input type="file"(change)="fileChange($event)" class="btn-file"></ion-input>\n                    <button ion-button block class="btn-upload">Add New Iamge</button>\n                </div>\n            </ion-col>\n            <ion-col col-4>\n                <button ion-button block [color]="btnColor" (click)="saveMarkImg()">Save</button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/workspace/Ionic/hair/src/pages/setting/setting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_file_progress_file_progress__["a" /* FileProgressProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_file_progress_file_progress__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_watermarkjs__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_watermarkjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_watermarkjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModalPage = (function () {
    function ModalPage(navCtrl, viewCtrl, fp, loadingCtrl, toastCtrl, params, camera, file) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.fp = fp;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.params = params;
        this.camera = camera;
        this.file = file;
        this.uid = '';
        this.staffId = '12';
        this.fTag = '2';
        this.sTag = '2';
        this.tTag = '2';
        this.message = '';
        this.hasError = false;
        this.process = false;
        this.markImg = "assets/imgs/watermark.png";
        this.type = '';
        this.search = {
            type: 'image',
            tag: ''
        };
        this.searchResults = [];
        this.photo = '';
        this.photoName = '';
        this.videoName = '';
        this.gifName = '';
        this.type = params.get('type');
        this.uid = localStorage.getItem('uid');
        this.fp.getWaterMarkImg().then(function (res) {
            if (res.length > 0) {
                _this.markImg = res[0].url;
            }
        });
        this.options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            //  encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.ALLMEDIA,
            saveToPhotoAlbum: false,
            allowEdit: true
        };
    }
    ModalPage.prototype.createLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
    };
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.loadImage = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imagePath) {
            _this.photo = imagePath.replace(/^file:\/\//, '');
            var d = new Date();
            if (_this.type == 'image') {
                _this.photoName = d.getTime() + ".jpg";
            }
            else if (_this.type == 'gif') {
                _this.photoName = d.getTime() + ".gif";
            }
        });
    };
    ModalPage.prototype.loadGif = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (fileUri) {
            window['resolveLocalFileSystemURL'](fileUri, function (fileEntry) {
                fileEntry.file(function (file) {
                    var fileReader = new FileReader();
                    fileReader.onloadend = function (result) {
                        var arrayBuffer = result.target.result;
                        var blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'image/gif' });
                        _this.gif = blob;
                        var d = new Date();
                        _this.gifName = d.getTime() + ".gif";
                    };
                    fileReader.readAsArrayBuffer(file);
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    ModalPage.prototype.loadVideo = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (fileUri) {
            window['resolveLocalFileSystemURL'](fileUri, function (fileEntry) {
                fileEntry.file(function (file) {
                    var fileReader = new FileReader();
                    fileReader.onloadend = function (result) {
                        var arrayBuffer = result.target.result;
                        var blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'video/mp4' });
                        _this.video = blob;
                        var d = new Date();
                        _this.videoName = d.getTime() + ".mp4";
                    };
                    fileReader.readAsArrayBuffer(file);
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    ModalPage.prototype.fileChange = function () {
        var _this = this;
        this.toast = this.toastCtrl.create({
            message: 'Image was uploaded successfully',
            duration: 3000,
            position: 'bottom',
            cssClass: 'toast.scss'
        });
        if (this.staffId == '' || this.fTag == '' || this.sTag == '' || this.tTag == '') {
            this.message = 'Please insert all values';
            this.hasError = true;
        }
        else {
            this.process = true;
            this.createLoader();
            this.loader.present();
            if (this.type == 'image') {
                this.loader.present().then(function () {
                    _this.makeWaterMark(_this.photo);
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.loader.dismiss();
                });
            }
            else if (this.type == 'gif') {
                this.loader.present().then(function () {
                    _this.gifUpload(_this.gif);
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.loader.dismiss();
                });
            }
            else {
                this.loader.present().then(function () {
                    _this.videoUpload(_this.video);
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.loader.dismiss();
                });
            }
        }
    };
    ModalPage.prototype.makeWaterMark = function (image) {
        var _this = this;
        var options = {
            init: function (img) {
                img.crossOrigin = 'anonymous';
            }
        };
        __WEBPACK_IMPORTED_MODULE_3_watermarkjs__([image, this.markImg], options)
            .image(__WEBPACK_IMPORTED_MODULE_3_watermarkjs__["image"].center(0.8))
            .then(function (img) {
            //  img = this.iamgeCompress(img)
            var uploadFile = {
                file: img.src,
                name: _this.photoName,
                type: 'image/jpg',
                fileType: _this.type,
                staffId: _this.staffId,
                fTag: _this.fTag,
                sTag: _this.sTag,
                tTag: _this.tTag
            };
            _this.imageUpload(uploadFile);
        })
            .catch(function (err) {
            console.log(err);
            _this.loader.dismiss();
        });
    };
    // iamgeCompress(img) {
    //   const canvas = this.convertImageToCanvas(img)
    //   return this.convertCanvasToImage(canvas)
    // }
    // convertImageToCanvas(image) {
    //   console.log("1===============>", image)
    //   var canvas = document.createElement("canvas");
    //   canvas.width = 1000;
    //   canvas.height = 1000;
    //   canvas.getContext("2d").drawImage(image, 0, 0);
    //   return canvas;
    // }
    // convertCanvasToImage(canvas) {
    //   var image = new Image();
    //   image.src = canvas.toDataURL("image/jpg");
    //   console.log(image)
    //   return image;
    // }
    ModalPage.prototype.imageUpload = function (selectedImage) {
        var _this = this;
        this.fp.imageUpload(selectedImage).then(function (res) {
            if (res == true) {
                _this.loader.dismiss();
                _this.process = false;
                _this.toast.present();
            }
        })
            .catch(function (err) {
            console.log(err);
            _this.loader.dismiss();
        });
    };
    ModalPage.prototype.gifUpload = function (file) {
        var _this = this;
        var selectedImage = {
            file: file,
            name: this.gifName,
            type: 'image/gif',
            fileType: this.type,
            staffId: this.staffId,
            fTag: this.fTag,
            sTag: this.sTag,
            tTag: this.tTag
        };
        console.log("selectedImage===============>", selectedImage);
        this.fp.videoUpload(selectedImage).then(function (res) {
            console.log(res);
            if (res == true) {
                _this.loader.dismiss();
                _this.process = false;
                _this.toast.present();
            }
        })
            .catch(function (err) {
            console.log(err);
            _this.loader.dismiss();
        });
    };
    ModalPage.prototype.videoUpload = function (file) {
        var _this = this;
        var selectedImage = {
            file: file,
            name: this.videoName,
            type: 'video/mp4',
            fileType: this.type,
            staffId: this.staffId,
            fTag: this.fTag,
            sTag: this.sTag,
            tTag: this.tTag
        };
        this.fp.videoUpload(selectedImage).then(function (res) {
            console.log(res);
            if (res == true) {
                _this.loader.dismiss();
                _this.process = false;
                _this.toast.present();
            }
        })
            .catch(function (err) {
            console.log(err);
            _this.loader.dismiss();
        });
    };
    ModalPage.prototype.searchFile = function () {
        var _this = this;
        this.createLoader();
        this.loader.present();
        this.searchResults = [];
        this.fp.fileSearch(this.search).then(function (res) {
            res.forEach(function (item) {
                if (item.uid == _this.uid) {
                    _this.searchResults.push(item);
                }
            });
            _this.loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            _this.loader.dismiss();
        });
    };
    return ModalPage;
}());
ModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modal',template:/*ion-inline-start:"/Volumes/Work/workspace/Ionic/hair/src/pages/modal/modal.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            {{type}}\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()" icon-left>\n                <ion-icon name="arrow-back" showWhen="ios"></ion-icon>\n                <span ion-text color="primary" showWhen="ios">\n                    Back</span>\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="content">\n    <ion-card [hidden]="type==\'search\'">\n        <p [ngClass]="{\'error-message\': hasError}">{{message}}</p>\n        <ion-input type="text" placeholder="Staff Id" class="input" [(ngModel)]="staffId"></ion-input>\n        <ion-input type="text" placeholder="First tag" class="input" [(ngModel)]="fTag"></ion-input>\n        <ion-input type="text" placeholder="Second tag" class="input" [(ngModel)]="sTag"></ion-input>\n        <ion-input type="text" placeholder="Third tag" class="input" [(ngModel)]="tTag"></ion-input>\n        <div class="file-upload">\n            <img [src]="photo" *ngIf="photo!=\'\' && type!=\'video\'" class="image-preview">\n            <button ion-button block class="btn-upload" (click)="loadImage()" *ngIf="type==\'image\'"> Take a Photo </button>\n            <button ion-button block class="btn-upload" (click)="loadGif()" *ngIf="type==\'gif\'"> Take a Gif </button>\n            <button ion-button block class="btn-upload" (click)="loadVideo()" *ngIf="type==\'video\'"> Take a Video </button>\n            <button ion-button block class="btn-upload" (click)="fileChange()">\n                <span *ngIf="type==\'image\'"> Upload Photo </span> \n                <span *ngIf="type==\'gif\'"> Upload Gif </span> \n                <span *ngIf="type==\'video\'"> Upload Video </span> \n            </button>\n        </div>\n    </ion-card>\n\n    <ion-card *ngIf="type==\'search\'">\n        <form (submit)="searchFile()">\n            <ion-item>\n                <ion-label>Select file type</ion-label>\n                <ion-select [(ngModel)]="search.type" name="searchType">\n                    <ion-option value="image">Image</ion-option>\n                    <ion-option value="gif">Gif</ion-option>\n                    <ion-option value="video">Video</ion-option>\n                </ion-select>\n            </ion-item>\n            <button ion-button block class="btn-search">Search</button>\n        </form>\n    </ion-card>\n\n    <ion-card *ngIf="searchResults.length > 0">\n        <ion-item *ngFor="let result of searchResults; let i = index">\n            <div class="file-item">\n                <img [src]="result.url" icon-left>\n                <div class="file-content">\n                    <p>StaffID: {{result.staffId}}</p>\n                    <p>First Tag: {{result.fTag}}</p>\n                    <p>Second Tag: {{result.sTag}}</p>\n                    <p>Third Tag: {{result.tTag}}</p>\n                </div>\n            </div>\n        </ion-item>\n    </ion-card>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Volumes/Work/workspace/Ionic/hair/src/pages/modal/modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_file_progress_file_progress__["a" /* FileProgressProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignUpPage = (function () {
    function SignUpPage(navCtrl, up, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.up = up;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.btnColor = 'btnColor';
        this.hasError = false;
        this.error = "";
        this.confirmPassword = "";
        this.account = {
            email: '',
            password: ''
        };
    }
    SignUpPage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    SignUpPage.prototype.signup = function () {
        var _this = this;
        if (this.account.password != this.confirmPassword) {
            this.error = 'Password is not matched';
            this.hasError = true;
        }
        else {
            this.up.register(this.account).then(function (res) {
                _this.error = "";
                _this.hasError = false;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
            }, function (err) {
                _this.error = err.message;
                _this.hasError = true;
            });
        }
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Volumes/Work/workspace/Ionic/hair/src/pages/signup/signup.html"*/'<ion-header >\n    <ion-navbar>\n        <ion-title text-center>\n            Hair Salon\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="signup-content">\n    <ion-card>\n        <ion-card-header>\n            <ion-item>\n                <ion-avatar class="avatar">\n                    <img src="assets/imgs/pexels-photo-432605.jpeg">\n                </ion-avatar>\n            </ion-item>\n        </ion-card-header>\n\n        <ion-card-content>\n            <form (submit)="signup()">\n                <span [ngClass]="{\'error-message\': hasError}">{{error}}</span>\n                <ion-input type="email" placeholder="Username" [(ngModel)]="account.email" name="email"\n                ></ion-input>\n                <ion-input type="password" placeholder="Password" [(ngModel)]="account.password" name="password"></ion-input>\n                <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="confirmPassword" name="confirmPassword"></ion-input>\n                <button ion-button block [color]="btnColor">signup</button>\n            </form>\n            <div class="signin-section">\n                <span class="already-account">Already have an account</span> \n                <button ion-button round [color]="btnColor" (click)="signIn()">\n                    Sign In\n                </button>\n            </div>\n            \n        </ion-card-content>\n        \n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/workspace/Ionic/hair/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], SignUpPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(327);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_landing_landing__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modal_modal__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_user__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_file_progress_file_progress__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyDSt9GELzSVkWoxbEkqzufc2vwAE4atVxw",
    authDomain: "hair-909ae.firebaseapp.com",
    databaseURL: "https://hair-909ae.firebaseio.com",
    projectId: "hair-909ae",
    storageBucket: "hair-909ae.appspot.com",
    messagingSenderId: "174120557504"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_landing_landing__["a" /* LandingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_modal_modal__["a" /* ModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_landing_landing__["a" /* LandingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_modal_modal__["a" /* ModalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_file_progress_file_progress__["a" /* FileProgressProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_transfer__["b" /* FileTransferObject */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Volumes/Work/workspace/Ionic/hair/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Volumes/Work/workspace/Ionic/hair/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_landing__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, up, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.up = up;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.btnColor = 'btnColor';
        this.hasError = false;
        this.error = "";
        this.account = {
            email: 'admin@admin.com',
            password: 'admin123'
        };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        //  this.navCtrl.push(LandingPage)
        this.up.login(this.account).then(function (user) {
            var currentUser = user.uid;
            localStorage.setItem('uid', currentUser);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__landing_landing__["a" /* LandingPage */]);
        }, function (err) {
            _this.hasError = true;
            _this.error = err.message;
        });
    };
    LoginPage.prototype.resetPassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        _this.up.resetPassword(data.username).then(function (res) {
                            var message;
                            if (res == true) {
                                message = 'We just sent message to your email.Please check your email';
                            }
                            else {
                                message = res.message;
                            }
                            var toast = _this.toastCtrl.create({
                                message: message,
                                duration: 3000,
                                position: 'bottom',
                                cssClass: 'toast.scss'
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignUpPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Volumes/Work/workspace/Ionic/hair/src/pages/login/login.html"*/'<ion-header >\n    <ion-navbar hideBackButton="true">\n        <ion-title>\n            Hair Salon\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content">\n    <ion-card>\n        <ion-card-header>\n            <ion-item>\n                <ion-avatar class="avatar">\n                    <img src="assets/imgs/pexels-photo-432605.jpeg">\n                </ion-avatar>\n            </ion-item>\n        </ion-card-header>\n\n        <ion-card-content>\n            <form (submit)="login()">\n                <span [ngClass]="{\'error-message\': hasError}">{{error}}</span>\n                <ion-input type="email" placeholder="Username" [(ngModel)]="account.email" name="email"\n                [ngClass]="{\'error\': hasError}"></ion-input>\n                <ion-input type="password" placeholder="Password" [(ngModel)]="account.password" name="password" [ngClass]="{\'error\': hasError}"></ion-input>\n                <button ion-button block [color]="btnColor">Login</button>\n            </form>            \n            <button ion-button block clear (click)="resetPassword()" [color]="btnColor">Forgot Password</button>\n            <div class="signup-section">\n                <span class="new-account">Don\'t have account?</span>\n                <button ion-button round [color]="btnColor" (click)="signUp()">\n                    Sign Up\n                </button>\n            </div>\n        </ion-card-content>\n        \n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Volumes/Work/workspace/Ionic/hair/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProvider = (function () {
    function UserProvider(http, afAuth) {
        this.http = http;
        this.afAuth = afAuth;
    }
    UserProvider.prototype.login = function (creds) {
        return this.afAuth.auth.signInWithEmailAndPassword(creds.email, creds.password);
    };
    UserProvider.prototype.register = function (creds) {
        return this.afAuth.auth.createUserWithEmailAndPassword(creds.email, creds.password);
    };
    UserProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    UserProvider.prototype.resetPassword = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.sendPasswordResetEmail(email).then(function () {
                resolve(true);
            }).catch(function (error) {
                resolve(error);
            });
        });
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ })

},[311]);
//# sourceMappingURL=main.js.map