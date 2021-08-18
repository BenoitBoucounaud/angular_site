import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * The services allow:
 *  -> not to have the same code doubled or tripled at different levels of the application - this therefore facilitates the maintenance, readability and stability of the code;
 *  -> not to copy data unnecessarily - if everything is centralized, each part of the application will have access to the same information, avoiding a lot of potential errors.
 * There are three possible levels for this injection:
 *  -> in AppModule: thus, the same instance of the service will be used by all the components of the application and by the other services;
 *  -> in AppComponent: as above, all components will have access to the same instance of the service but not the other services;
 *  -> in another component: the component itself and all its children (i.e. all the components it encompasses) 
 *      will have access to the same instance of the service, but the rest of the application will not no access.
 */

@Injectable()
export class ApparatusService {

    // observables : https://angular.io/guide/observables
    apparatusSubject = new Subject<any[]>();

    // apparatus : status
    private apparatuses: any[] = [];

    constructor(private httpClient: HttpClient) {
        // could use this to get apparatuses first but we want to show it with the button
        // this.getApparatusesFromServer();
    }

    emitApparatusSubject() {
        // next : A handler for each delivered value. 
        this.apparatusSubject.next(this.apparatuses.slice());
    }

    addApparatus(name: string, status: string) {
        const apparatusObject = {
            id: 0,
            name: '',
            status: ''
        };
        apparatusObject.name = name;
        apparatusObject.status = status;
        apparatusObject.id = this.apparatuses[(this.apparatuses.length - 1)].id + 1;
        this.apparatuses.push(apparatusObject);
        console.log(this.apparatuses)
        this.emitApparatusSubject();
    }

    switchOnAll() {
        for (let apparatus of this.apparatuses) {
            apparatus.status = 'on'
        }
        this.emitApparatusSubject()
    }

    switchOffAll() {
        for (let apparatus of this.apparatuses) {
            apparatus.status = 'off'
        }
        this.emitApparatusSubject()
    }

    switchOnOne(i: number) {
        this.apparatuses[i].status = 'on';
        this.emitApparatusSubject()
    }

    switchOffOne(i: number) {
        this.apparatuses[i].status = 'off';
        this.emitApparatusSubject()
    }

    getSwitchingAction(i: number): string {
        if (this.apparatuses[i].status === 'off')
            return 'on'
        else
            return 'off'
    }

    getApparatusById(id: number) {
        const apparatus = this.apparatuses.find(
            (s) => {
                return s.id === id;
            }
        );
        return apparatus;
    }

    saveApparatusesToServer() {
        // use put to delete old apparatuses in database
        this.httpClient
            .put('https://angular-site-database-default-rtdb.europe-west1.firebasedatabase.app/apparatuses.json', this.apparatuses)
            .subscribe(
                () => {
                    console.log('Saved !');
                },
                (error) => {
                    console.log('Error ! : ' + error);
                }
            );
    }

    getApparatusesFromServer() {
        this.httpClient
            .get<any[]>('https://angular-site-database-default-rtdb.europe-west1.firebasedatabase.app/apparatuses.json')
            .subscribe(
                (response) => {
                    this.apparatuses = response;
                    this.emitApparatusSubject();
                },
                (error) => {
                    console.log('Error ! : ' + error);
                }
            );
    }
}