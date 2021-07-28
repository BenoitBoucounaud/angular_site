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

    // apparatus : status
    apparatuses = [
        {
            name: 'Washing machine',
            status: 'off'
        },
        {
            name: 'Coffee machine',
            status: 'on'
        },
        {
            name: 'Dishwasher',
            status: 'off'
        }

    ];

    switchOnAll() {

        for (let apparatus of this.apparatuses) {
            apparatus.status = 'on'
        }
    }

    switchOffAll() {

        for (let apparatus of this.apparatuses) {
            apparatus.status = 'off'
        }
    }

    switchOnOne(i: number) {
        this.apparatuses[i].status = 'on';
    }

    switchOffOne(i: number) {
        this.apparatuses[i].status = 'off';
    }

    getSwitchingAction(i: number): string {
        if (this.apparatuses[i].status === 'off')
            return 'on'
        else
            return 'off'
    }
}