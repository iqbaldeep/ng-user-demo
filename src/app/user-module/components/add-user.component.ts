/**
 * Created by Iqbaldeep_Singh on 5/4/2017.
 */

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User }    from '../models/user';
import {UserService} from '../../services/manage-users.service';
import { NotifyService } from '../../services/notify.service';

@Component({
    moduleId: module.id,
    selector: 'add-user-form',
    templateUrl: '../views/add-user.component.html',
    styleUrls: ['../styles/add-user.component.css']
})
export class AddUserComponent {
    addSuccess = false;
    private newUser: User;
    hideLoader = true;

    constructor(private router: Router, private userService: UserService,
                private notifyService: NotifyService) {

    }


    addUser(form: NgForm) {
        this.hideLoader = false;

         this.newUser = new User(0, form.value.firstName, form.value.lastName, form.value.dob, form.value.firstName+form.value.lastName);
        
        this.userService.create(this.newUser).then(user => {
            this.newUser = user;
            // send message to subscribers via observable subject
            this.notifyService.notify('addSuccess');
            this.addSuccess = true;
            this.hideLoader = true;
            form.reset();
        });

    }
}
