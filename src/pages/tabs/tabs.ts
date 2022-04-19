import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppareilsPage } from '../appareils/appareils';
import { AuthPage } from '../auth/auth';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  single = AppareilsPage;
  settings = SettingsPage;
  connexion = AuthPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
