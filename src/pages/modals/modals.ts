import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Modals page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html'
})
export class ModalsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalsPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
