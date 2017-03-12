import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AboutPage} from '../about/about'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public params : any;

  constructor(public navCtrl: NavController) {
    this.params = {
      id : 1,
      name : "sample App",
      description : "This is a description for sample app"
    }
  }

  setNavigationLink(){
    this.navCtrl.push(AboutPage, this.params.id);
  }

}
