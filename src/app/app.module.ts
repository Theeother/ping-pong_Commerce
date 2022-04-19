import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AppareilPage } from '../pages/single-appareil/appareil';
import { OptionsPage } from '../pages/options/options';
import { AppareilsService } from '../Services/appareil.service';
import { AppareilFormPage } from '../pages/appareil-form/appareil-form';
import { AuthService } from '../Services/auth.service';
import { AuthPage } from '../pages/auth/auth';
import { AppareilsPage } from '../pages/appareils/appareils';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppareilsPage,
    TabsPage,
    SettingsPage,
    AppareilPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppareilsPage,
    SettingsPage,
    TabsPage,
    AppareilPage,
    OptionsPage,
    AppareilFormPage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppareilsService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
