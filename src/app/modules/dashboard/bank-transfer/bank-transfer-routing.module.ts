import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetBankTransferComponent} from './get-bank-transfer/get-bank-transfer.component';
import {PerformBankTransferComponent} from './perform-bank-transfer/perform-bank-transfer.component';

const routes: Routes = [
  {
    path: '',
    component: GetBankTransferComponent
  },
  {
    path: 'perform',
    component: PerformBankTransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankTransferRoutingModule { }
