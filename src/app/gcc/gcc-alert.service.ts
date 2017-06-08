import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { GccAlert } from './gcc-alert';

@Injectable()
export class GccAlertService {
    private gccAlertsUrl = 'api/gcc_alerts';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getGccAlerts(): Promise<GccAlert[]> {
        return this.http.get(this.gccAlertsUrl)
                    .toPromise()
                    .then(response => response.json().data as GccAlert[])
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getGccAlert(id: number): Promise<GccAlert> {
        const url = `${this.gccAlertsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as GccAlert)
            .catch(this.handleError);
    }

    update(gccAlert: GccAlert): Promise<GccAlert> {
        const url = `${this.gccAlertsUrl}/${gccAlert.id}`;
        return this.http
                .put(url, JSON.stringify(gccAlert), {headers: this.headers})
                .toPromise()
                .then(() => gccAlert)
                .catch(this.handleError);
    }

    create(severity: number, component: string, description: string): Promise<GccAlert> {
        return this.http
            .post(this.gccAlertsUrl, JSON.stringify({
                                            severity: severity,
                                            component: component,
                                            description: description                                            
                                        }), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as GccAlert)
            .catch(this.handleError);
    }
}