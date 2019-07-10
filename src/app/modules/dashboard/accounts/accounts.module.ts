import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { GetAccountsComponent } from './get-accounts/get-accounts.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [GetAccountsComponent, CreateAccountsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AccountsModule { }
