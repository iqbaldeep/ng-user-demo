import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { UsersComponent }  from '../user-module/components/users.component';
import { AppComponent }  from './app.component';
import { UserService }  from '../services/manage-users.service';
import { NotifyService }  from '../services/notify.service';
import { AddUserComponent } from '../user-module/components/add-user.component';

import { AppRoutingModule }     from './app-routing.module';


@NgModule({

  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule
                ],
  declarations: [ AppComponent,
                  UsersComponent,
                  AddUserComponent
                ],
  providers:    [
                  UserService,
                  NotifyService
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
