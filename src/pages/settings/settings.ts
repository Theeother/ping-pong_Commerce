import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

const DATABASE_FILE_NAME: string = 'data.db';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  private db:SQLiteObject;
  products: string[]=[];
  name: string;
  description:string;
  isOn:boolean;
  imgPath:string;
  prix:number;


  constructor(public navCtrl: NavController, private sqlite:SQLite) {
    this.createdatabaseFile();
  }
  private createDatabaseFile(): void {
    this.sqlite.create({
    name: DATABASE_FILE_NAME,
    location: 'default'
    })
    .then((db: SQLiteObject) => {
    console.log('Bdd créée !');
    this.db = db;
    this.createTables();
    })
    .catch(e => console.log(e));
    }
  private createTables(): void {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS `produits` ( `idProduit` INTEGER NOT NULL, `name` TEXT NOT NULL,  `desc` TEXT, `categoryId` INTEGER, PRIMARY KEY(`idMovies`), FOREIGN KEY(`categoryId`) REFERENCES idCategories )', {})
      .then(() => {
      console.log('Table Movies created !');
    


}
