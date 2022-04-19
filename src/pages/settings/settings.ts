import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  onToogle(){
    let alert = this.alertCtrl.create({
      title: 'Êtes-vous certain(e) de vouloir continuer ?',
      subTitle: 'Cette action allumera ou éteindra toutes les lumières de la maison !',
      buttons: [
      {
      text: 'Annuler',
      role: 'cancel'
      },
      {
      text: 'Confirmer',
      handler: () => console.log('Confirmé !')
      }
      ]
      });
      alert.present();
  }

}
