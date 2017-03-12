import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {ModalsPage} from '../modals/modals';

/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modCtrl : ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  setNavigationLink(){
    let modal = this.modCtrl.create(ModalsPage);
    modal.present();
  }

}
