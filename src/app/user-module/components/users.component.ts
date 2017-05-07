import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';

import { User } from '../models/user';
import {UserService} from '../../services/manage-users.service';
import { NotifyService } from '../../services/notify.service';


@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: '../views/users.component.html',
  styleUrls: ['../styles/users.component.css']
})
export class UsersComponent  implements OnInit, OnDestroy   {
  users: User[];
  query= '';
  pageUsers: User[];
  errorMessage: string
  subscription: Subscription;

  constructor(private userService: UserService, private router: Router,
              private notifyService: NotifyService) {
    // subscribe to messages from add user compoennt
    this.subscription = this.notifyService.getNotified().subscribe(message => {

      if(message.text == "addSuccess") {
        this.getUsers();
      }

    });

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  getUsers() {
    this.userService.getAllUsers()
        .subscribe(
            users => {

              users.forEach(function (user) {

                user.name = user.firstName + " " + user.lastName;

              })
              this.users = users;
              this.pageUsers = users;
            },
            error =>  this.errorMessage = <any>error);

  }

  ngOnInit(): void {
    this.getUsers();
  }

  search(query: string): void {
    this.pageUsers = this.users.filter(user => user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }


}
