import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';

import { AuthPage } from '../pages/auth/auth';
import * as firebase from 'firebase';

@Component({
templateUrl: 'app.html'
})
export class MyApp {

  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  authPage:any = AuthPage;

  @ViewChild('content') content: NavController;
  isAuth: boolean;
  
  constructor(platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      private menuCtrl: MenuController) {

        platform.ready().then(() => {
          statusBar.styleDefault();
          splashScreen.hide();
          let config = {
            apiKey: "AIzaSyCEnM8XT3NsVw9HbP1XqDdeBQ_4JwCV_Jk",
            authDomain: "pinsport-d9f44.firebaseapp.com",
            projectId: "pinsport-d9f44",
            storageBucket: "pinsport-d9f44.appspot.com",
            messagingSenderId: "458748843964",
            appId: "1:458748843964:web:8c248a2be17aaa0e9abdb9",
            measurementId: "G-P63GRVG41D"
          };
          firebase.initializeApp(config);
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.isAuth = true;
              this.content.setRoot(TabsPage);
            } else {
              this.isAuth = false;
              this.content.setRoot(AuthPage, {mode: 'connect'});
            }
          });
        });

  }
  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
    }

    onDisconnect() {
      firebase.auth().signOut();
      this.menuCtrl.close();
    }
    
}


