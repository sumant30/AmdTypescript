import ds = require('./dataservice');

export interface IAlerter {
    name: string;
    callMessage(): void;
}

var dataService = new ds.DataService();

export class Alerter implements IAlerter {

    name = 'Sumant';

    callMessage() {
        dataService.showMessage(this.name);
    }
}

