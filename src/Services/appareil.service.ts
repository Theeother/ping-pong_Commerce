import { Subject } from 'rxjs';
import { Appareil } from '../models/Appareil';
import DataSnapshot = firebase.database.DataSnapshot;


export class AppareilsService {
    appareils$ = new Subject <Appareil[]>();

    appareilsList: Appareil[] = [
        {
            name: 'XIAOMI Mi Smart Band 5',
            description: [
              'Etanche',
              'écran AMOLED de 1,1 pouces',
               'suivre sa fréquence cardiaque',
            ],
            isOn: true,
            startTime: '',
            endTime: '',
            imagePath: '../assets/imgs/1.jpg',
            Prix:'98.99'
        },
        {
            name: 'XIAOMI Mi Smart Band 6',
            description: [
              'interface attrayante',
              'afficher vos notifications',
              'écran AMOLED de 1.47" à résolution 194 x 368 pixels',
              'résistance à l"eau jusqu"à 50 mètres'
                
            ],
            isOn: true,
            startTime: '',
            endTime: '',
            imagePath: '../assets/imgs/2.jpg',
            Prix:'235.99'
        },
        {
            name: 'Oppo Band ',
            description: [
                'écran AMOLED de haute qualité avec une diagonale de 1,1',
                'résistance à l"eau de 50 mètres',
                'suivre sa fréquence cardiaque',
            ],
            isOn: false,
            startTime: '',
            endTime: '',
            imagePath: '../assets/imgs/4.jpg',
            Prix:'149.99'
        }
    ];

    addAppareil(appareil: Appareil) {
        this.appareilsList.push(appareil);
        this.emitAppareils();
    }
    emitAppareils() {
        this.appareils$.next(this.appareilsList.slice());
    }
    saveData() {
        return new Promise((resolve, reject) => {
          firebase.database().ref('appareils').set(this.appareilsList).then(
            (data: DataSnapshot) => {
              resolve(data);
            },(error) => {
              reject(error);
            });
          });
        }
  
      retrieveData() {
        return new Promise((resolve, reject) => {
          firebase.database().ref('appareils').once('value').then(
            (data: DataSnapshot) => {
              this.appareilsList = data.val();
              this.emitAppareils();
              resolve('Données récupérées avec succès !');
            }, (error) => {
              reject(error);
            });
        });
      }


}