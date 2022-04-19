import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavParams, ViewController } from 'ionic-angular';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../Services/appareil.service';

@Component({
  selector: 'page-appareil',
  templateUrl: 'appareil.html',
})
export class AppareilPage implements OnInit {
  index: number;
  appareil: Appareil;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public appareilsService: AppareilsService) {}

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
    console.log(this.appareil);
  }
  dismissModal() {
    console.log("dismissModal");
    this.viewCtrl.dismiss();
  }
  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }
  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();
    }
    onDeleteHours() {
    this.appareil.startTime = '';
    this.appareil.endTime = '';
    this.dismissModal();
    }
}
