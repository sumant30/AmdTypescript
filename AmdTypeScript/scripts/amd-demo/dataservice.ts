export interface IDataService {
    message: string;
    showMessage(x:string): void;
}

export class DataService implements IDataService {

    message = 'Welcome to the typescript world, ';

    showMessage(x: string) {
        alert(this.message+', '+x);  
    }

}