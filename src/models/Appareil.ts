export class Appareil {

    description: string[];
    isOn: boolean;
    startTime: string;
    endTime: string;
    imagePath: string;
    Prix:string;

    constructor(public name: string) {
        this.description = [];
        this.isOn = false;
        this.startTime = '';
        this.endTime = '';
    }
}