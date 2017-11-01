import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class FileProgressProvider {

  public user: any

  constructor(public http: Http,  public db: AngularFireDatabase, public app: FirebaseApp) {
    this.user = localStorage.getItem('uid')
  }

  private basePath: string = '/uploads';

  imageUpload(selectedFile) {
    this.basePath = '/uploads/images'
    let storageRef = firebase.storage().ref();
    const path = `/${this.basePath}/${this.user}/${selectedFile.name}`;
    let iRef = storageRef.child(path);

    return new Promise((resolve, reject) => {
      iRef.putString(selectedFile.file.substring(22), 'base64', {contentType: selectedFile.type})
      .then((snapshot) => {
        this.db.list(`${this.basePath}/`).push({
          uid: this.user,
          url: selectedFile.file,
          fileName: selectedFile.name,
          fileType: selectedFile.type,
          staffId: selectedFile.staffId,
          fTag: selectedFile.fTag,
          sTag: selectedFile.sTag,
          tTag: selectedFile.tTag
        });
        resolve(true)
      },
      (error) => {
        resolve(false)
      });
    })
  }

  videoUpload(selectedFile) {
    if(selectedFile.fileType == 'gif') {
      this.basePath = '/uploads/gif'
    } else {
      this.basePath = '/uploads/video'
    }

    let storageRef = firebase.storage().ref();
    const path = `/${this.basePath}/${selectedFile.name}`;
    let iRef = storageRef.child(path);

    return new Promise((resolve, reject) => {
      iRef.put(selectedFile.file).then((snapshot) => {
        console.log(snapshot)
        this.db.list(`${this.basePath}/`).push({
          uid: this.user,
          url: snapshot.downloadURL,
          fileName: selectedFile.name,
          fileType: selectedFile.type,
          staffId: selectedFile.staffId,
          fTag: selectedFile.fTag,
          sTag: selectedFile.sTag,
          tTag: selectedFile.tTag
        });
        resolve(true)
      },
      (error) => {
        resolve(false)
      });
    })
  }


  fileSearch(item) {
    let items = []
    if(item.type == 'image') {
      this.basePath = '/uploads/images'
    } else if(item.type == 'gif') {
      this.basePath = '/uploads/gif'
    } else {
      this.basePath = '/uploads/video'
    }

    const query = this.app.database().ref(`${this.basePath}`);
    return new Promise((resolve, reject) => {
      query.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          let key = childSnapshot.key;
          let childData = childSnapshot.val();
          items.push(childData)
        });
        resolve(items)
      });
    })
  }

  waterMarkUpload(markFile) {
    this.basePath = '/uploads/images/watermark'
    let storageRef = firebase.storage().ref();
    const path = `/${this.basePath}/${markFile.name}`;
    let iRef = storageRef.child(path);

    return new Promise((resolve, reject) => {
      iRef.put(markFile).then((snapshot) => {
        this.db.list(`${this.basePath}/`).push({
          uid: this.user,
          url: snapshot.downloadURL
        });
        resolve(true)
      },
      (error) => {
        resolve(false)
      });
    })
  }

  getWaterMarkImg() {
    let items = []
    this.basePath = '/uploads/images/watermark'
    const query = this.app.database().ref(`${this.basePath}`);
    return new Promise((resolve, reject) => {
      query.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          let key = childSnapshot.key;
          let childData = childSnapshot.val();
          items.push(childData)
        });
        resolve(items)
      });
    })
  }
}
