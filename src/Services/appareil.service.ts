import { Subject } from 'rxjs';
import { Appareil } from '../models/Appareil';




export class AppareilsService {
    appareils$ = new Subject <Appareil[]>();

    appareilsList: Appareil[] = [

      {
        name: 'Set 2 raquettes de ping pong ppr 100 small et 3 balles',
        description: [
          "Ce set est composé de 2 raquettes PPR 100 SMALL Indoor et de 3 balles orange (1 étoile)",
          "L'association d'un bois de raquette tendre et des 2 revêtements en caoutchouc peu rapides et peu adhérents vous procurent un excellent contrôle de balle, idéal pour débuter le tennis de table.",

        ],
        isOn: true,
        startTime: '',
        endTime: '',
        imagePath: '../assets/imgs/3.jpg',
        Prix:'23,00 TND'
    },
        {
            name: 'Poteaux filet de ping pong réglable rollnet bleu/blanc',
            description: [
              "Son filet enrouleur (hauteur : 15 cm) vous permettra d'installer votre filet de Tennis de Table sur une table d'une largeur maximale de 1,7 mètres",
              "Sa petite taille (Longueur : 19cm, Largeur : 16cm, Épaisseur : 5cm) et son faible poids (370g ) vous permettent de l'emmener partout avec vous : sac à main, valise, cartable !"
            ],
            isOn: true,
            startTime: '',
            endTime: '',
            imagePath: '../assets/imgs/4.jpg',
            Prix:'35,00 TND'
        },
        {
            name: 'Table de ping pong extérieure ppt 930 noire avec housse',
            description: [
              'Poids : 75 kg',
              "Dimension table ouverte : 274 x 173 x 76 cm (hors filet) (L x la x H)",
              "Dimension table repliée : 85 x 173x 167 cm",
              "Dimension carton : 144 x 163 x 14 cm"               
            ],
            isOn: false,
            startTime: '',
            endTime: '',
            imagePath: '../assets/imgs/2.jpg',
            Prix:'2 490,00 TND'
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
            (data) => {
              resolve(data);
            },(error) => {
              reject(error);
            });
          });
        }
  
      retrieveData() {
        return new Promise((resolve, reject) => {
          firebase.database().ref('appareils').once('value').then(
            (data) => {
              this.appareilsList = data.val();
              this.emitAppareils();
              resolve('Données récupérées avec succès !');
            }, (error) => {
              reject(error);
            });
        });
      }


}