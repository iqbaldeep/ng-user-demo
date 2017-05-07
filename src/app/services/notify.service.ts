/**
 * Created by Iqbaldeep_Singh on 5/6/2017.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotifyService {
    private notification = new Subject<any>();

    notify(message: string) {
        this.notification.next({ text: message });
    }

    clearNotification() {
        this.notification.next();
    }

    getNotified(): Observable<any> {
        return this.notification.asObservable();
    }
}