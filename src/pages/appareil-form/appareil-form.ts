import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../Services/appareil.service';


@Component({
  selector: 'page-appareil-form',
  templateUrl: 'appareil-form.html',
})
export class AppareilFormPage implements OnInit {
  appareilForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
        public navCtrl: NavController,
        public appareilsService: AppareilsService) {}
    ngOnInit() {
    this.initForm();
    }
    initForm() {
    this.appareilForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: this.formBuilder.array([])
    });
    }
    getDescriptionArray() {
      return this.appareilForm.get('description') as FormArray;
    }
    onAddDescription() {
      let newControl = this.formBuilder.control('');
      this.getDescriptionArray().controls.push(newControl);
    }
    onRemoveDescription(index: number) {
      this.getDescriptionArray().removeAt(index);
    }
    onSubmitForm() {
      let newAppareil = new Appareil(this.appareilForm.get('name').value);
      for (let control of this.getDescriptionArray().controls) {
        newAppareil.description.push(control.value);
      }
      this.appareilsService.addAppareil(newAppareil);
      this.navCtrl.pop();
    }
  }
