/**
 * Created by Iqbaldeep_Singh on 3/5/2017.
 */

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent }      from '../user-module/components/users.component';

const routes: Routes = [
  // { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '',     component: UsersComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
