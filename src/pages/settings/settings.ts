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
    this.createDatabaseFile();
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
      this.db.executeSql('CREATE TABLE IF NOT EXISTS `produits` ( \
        `idProduit` INTEGER NOT NULL,\
        `name` TEXT NOT NULL,\
        `desc` TEXT,\
        `prix` TEXT,\
        `imagePath` TEXT,\
        `isOn` INTEGER DEFAULT 1,\
        PRIMARY KEY(`idProduit`))',{})
      .then(() => {
      console.log('Table Produits created !');
      })
      .catch(e => console.log(e));
    }

    public saveMyProd() {
    
      // INSERT INTO `CATEGORIES` (name) VALUES('Test');
      // INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES ('Nom film', 3, 'Description', 1)
      this.db.executeSql('INSERT INTO `produits`(name, desc, prix , imagePath,isOn) VALUES (\'' + this.name + '\', '+
      this.description +', \''+ this.prix +', \''+ this.imgPath +', \''+ this.isOn.valueOf()   +'\', last_insert_rowid())', {})
      .then(() => console.log('Movie inserted !'))
      .catch(e => console.log(e));
      }
      
    public retrieveFilms() {
        this.products = [];
        this.db.executeSql('SELECT name FROM `produits`', {})
        .then((data) => {
        if(data == null) {
        return;
        }
        if(data.rows) {
        if(data.rows.length > 0) {
        for(var i = 0; i < data.rows.length; i++) {
        this.products.push(data.rows.item(i).name);
        }
        }
        }
        });
        }

}
