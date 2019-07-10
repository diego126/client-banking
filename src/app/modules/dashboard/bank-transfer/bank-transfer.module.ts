import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankTransferRoutingModule } from './bank-transfer-routing.module';
import { GetBankTransferComponent } from './get-bank-transfer/get-bank-transfer.component';
import { PerformBankTransferComponent } from './perform-bank-transfer/perform-bank-transfer.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [GetBankTransferComponent, PerformBankTransferComponent],
  imports: [
    CommonModule,
    BankTransferRoutingModule,
    ReactiveFormsModule
  ]
})
export class BankTransferModule { }
