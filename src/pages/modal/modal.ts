import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FileProgressProvider } from '../../providers/file-progress/file-progress';
import { ToastController } from 'ionic-angular';
import * as watermark from 'watermarkjs';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  public uid: string = ''
  public staffId: string = '12'
  public fTag: string = '2'
  public sTag: string = '2'
  public tTag: string = '2'
  public message: string = ''
  public hasError: boolean = false
  public process: boolean = false
  public markImg: string = "assets/imgs/watermark.png"
  public loader: any
  public toast: any
  public type: string = ''
  public search: {type: string, tag: string} = {
    type: 'image',
    tag: ''
  }
  public searchResults: any = []
  public photo: string = ''
  public photoName: string = ''
  public video: any
  public videoName: string = ''
  public gif: any
  public gifName: string = ''
  public options: any

  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController, 
    public fp: FileProgressProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public params: NavParams,
    private camera: Camera,
    public file: File
  ) {
    this.type = params.get('type')
    this.uid = localStorage.getItem('uid')

    this.fp.getWaterMarkImg().then((res: any) => {
      if(res.length > 0) {
        this.markImg = res[0].url
      }      
    })

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

  createLoader() { 
     this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

  loadImage() {
    this.camera.getPicture(this.options).then((imagePath) => {
      this.photo = imagePath.replace(/^file:\/\//, '');
      const d = new Date();
      if(this.type == 'image') {
        this.photoName =  d.getTime() + ".jpg";  
      } else if(this.type == 'gif'){
        this.photoName =  d.getTime() + ".gif";
      }
    })

  }

  loadGif() {
    this.camera.getPicture(this.options).then( (fileUri: any) => {
      this.photo = fileUri.replace(/^file:\/\//, '');
      window['resolveLocalFileSystemURL'](fileUri, (fileEntry) => {
        fileEntry.file( (file) => {
          const fileReader = new FileReader();

          fileReader.onloadend = (result: any) => {
            let arrayBuffer = result.target.result;
            let blob = new Blob([new Uint8Array(arrayBuffer)], {type: 'image/gif'});
            this.gif = blob
            const d = new Date();
            this.gifName = d.getTime() + ".gif";
          };
         
          fileReader.readAsArrayBuffer(file);
        }, (error) => {
         console.log(error);
        });
      }, (error) => {
        console.log(error);
      });
    });
  }

  loadVideo() {
    this.camera.getPicture(this.options).then( (fileUri: any) => {
      window['resolveLocalFileSystemURL'](fileUri, (fileEntry) => {
        fileEntry.file( (file) => {
          const fileReader = new FileReader();

          fileReader.onloadend = (result: any) => {
            let arrayBuffer = result.target.result;
            let blob = new Blob([new Uint8Array(arrayBuffer)], {type: 'video/mp4'});
            this.video = blob
            const d = new Date();
            this.videoName = d.getTime() + ".mp4";
          };
         
          fileReader.readAsArrayBuffer(file);
        }, (error) => {
         console.log(error);
        });
      }, (error) => {
        console.log(error);
      });
    });
  }

  fileChange() {
    this.toast = this.toastCtrl.create({
      message: 'Image was uploaded successfully',
      duration: 3000,
      position: 'bottom',
      cssClass: 'toast.scss'
    });

    if(this.staffId == '' || this.fTag == '' || this.sTag == '' || this.tTag == '') {
      this.message = 'Please insert all values'
      this.hasError = true
    } else {
      this.process = true
      this.createLoader()
      this.loader.present()
    
      if(this.type == 'image' ) {
        this.loader.present().then(() => {
          this.makeWaterMark(this.photo)  
        })
        .catch(err => {
          console.log(err)
          this.loader.dismiss()
        });    
      }
      else if (this.type == 'gif'){
        this.loader.present().then(() => {
          this.gifUpload(this.gif)
        })
        .catch(err => {
          console.log(err)
          this.loader.dismiss()
        }); 
      }
      else{
        this.loader.present().then(() => {
          this.videoUpload(this.video)
        })
        .catch(err => {
          console.log(err)
          this.loader.dismiss()
        });
      }
    }
  }

  makeWaterMark(image) {
    const options = {
      init(img) {
        img.crossOrigin = 'anonymous'
      }
    };

    watermark([image, this.markImg], options)
    .image(watermark.image.center(0.8))
    .then((img) => {
    //  img = this.iamgeCompress(img)
      let uploadFile = {
        file: img.src,
        name: this.photoName,
        type: 'image/jpg',
        fileType: this.type,
        staffId: this.staffId,
        fTag: this.fTag,
        sTag: this.sTag,
        tTag: this.tTag
      }

      this.imageUpload(uploadFile)
    })
    .catch(err => {
      console.log(err)
      this.loader.dismiss()
    });
    
  }

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

  imageUpload(selectedImage) {
    this.fp.imageUpload(selectedImage).then((res)=> {
      if(res == true) {
        this.loader.dismiss()
        this.process = false
        this.toast.present()
      }
    })
    .catch(err => {
      console.log(err)
      this.loader.dismiss()
    });
  }

  gifUpload(file) {
    const selectedImage = {
      file: file,
      name: this.gifName,
      type: 'image/gif',
      fileType: this.type,
      staffId: this.staffId,
      fTag: this.fTag,
      sTag: this.sTag,
      tTag: this.tTag
    }

    this.fp.videoUpload(selectedImage).then((res)=> {
      console.log(res)
      if(res == true) {
        this.loader.dismiss()
        this.process = false
        this.toast.present()
      }
    })
    .catch(err => {
      console.log(err)
      this.loader.dismiss()
    });
  }

  videoUpload(file) {
    const selectedImage = {
      file: file,
      name: this.videoName,
      type: 'video/mp4',
      fileType: this.type,
      staffId: this.staffId,
      fTag: this.fTag,
      sTag: this.sTag,
      tTag: this.tTag
    }

    this.fp.videoUpload(selectedImage).then((res)=> {
      console.log(res)
      if(res == true) {
        this.loader.dismiss()
        this.process = false
        this.toast.present()
      }
    })
    .catch(err => {
      console.log(err)
      this.loader.dismiss()
    });
  }

  searchFile() {
    this.createLoader()
    this.loader.present()
    this.searchResults = []
    this.fp.fileSearch(this.search).then((res: any) => {
      res.forEach((item) => {
        if(item.uid == this.uid){         
          this.searchResults.push(item)
        }
      })
      this.loader.dismiss()
    })
    .catch(err => {
      console.log(err)
      this.loader.dismiss()
    });  
  }

}
