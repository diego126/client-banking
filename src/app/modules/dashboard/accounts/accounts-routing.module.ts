import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAccountsComponent} from './create-accounts/create-accounts.component';
import {GetAccountsComponent} from './get-accounts/get-accounts.component';
import {NgxPermissionsGuard} from 'ngx-permissions';

const routes: Routes = [
  {
    path: ':customerId',
    component: CreateAccountsComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'canAddAccount'
      }
    }
  },
  {
    path: 'get',
    component: GetAccountsComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'canAccessAccounts'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
