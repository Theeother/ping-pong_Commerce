import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
import firebase, { initializeApp } from "firebase/app";
import { AuthPage } from '../pages/auth/auth';

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
          let firebaseConfig = {
            apiKey: "AIzaSyAKZhc-KccAPCe7SzYkyfX9RK7VStBeTJ8",
            authDomain: "store-c0065.firebaseapp.com",
            projectId: "store-c0065",
            storageBucket: "store-c0065.appspot.com",
            messagingSenderId: "1072388922947",
            appId: "1:1072388922947:web:c1f1c734ce6334a0f2fef6",
            measurementId: "G-W0RHWB0DZ5"
          };
          let app = initializeApp(firebaseConfig);
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


