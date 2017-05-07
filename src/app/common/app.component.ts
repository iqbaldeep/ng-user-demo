/**
 * Created by Iqbaldeep_Singh on 3/4/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'users-demo',
  moduleId: module.id,
  styleUrls: ['./app.component.css'],
  template: `
        <h1>{{title}}</h1>
       <nav>
          <a routerLink="/users" routerLinkActive="active">Users</a>
       </nav>
       <router-outlet></router-outlet>
        `
})
export class AppComponent {
  title = 'Manage Users';
}
