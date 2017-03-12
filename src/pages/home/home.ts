import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact'
import {TweetsPage} from '../tweets/tweets';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private pages: Array<{ title: string, link: any }>;

  constructor(public navCtrl: NavController) {
    this.pages = [{
      title : "About",
      link : AboutPage
    },{
      title : "Contact Us",
      link : ContactPage
    },{
      title : "Tweets",
      link : TweetsPage
    }];
  }

  setNavigationLink(page) {
    this.navCtrl.push(page.link);
  }

}
