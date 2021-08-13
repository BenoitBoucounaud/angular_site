import { Subject } from 'rxjs/Subject';

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

export class ApparatusService {

    // observables : https://angular.io/guide/observables
    apparatusSubject = new Subject<any[]>();

    // apparatus : status
    private apparatuses = [
        {
            id: 1,
            name: 'Washing machine',
            status: 'off'
        },
        {
            id: 2,
            name: 'Coffee machine',
            status: 'on'
        },
        {
            id: 3,
            name: 'Dishwasher',
            status: 'off'
        }

    ];

    emitApparatusSubject() {
        // next : A handler for each delivered value. 
        this.apparatusSubject.next(this.apparatuses.slice());
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
        const appareil = this.apparatuses.find(
            (s) => {
                return s.id === id;
            }
        );
        return appareil;
    }
}