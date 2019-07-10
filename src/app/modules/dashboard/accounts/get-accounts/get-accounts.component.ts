import {Component, OnInit} from '@angular/core';
import {AccountsService} from '../../../../core/services/accounts.service';
import {BankAccount} from '../../../../core/models/accounts/BankAccount';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BankTransferService} from '../../../../core/services/bank-transfer.service';

@Component({
  selector: 'app-get-accounts',
  templateUrl: './get-accounts.component.html',
  styleUrls: ['./get-accounts.component.css']
})
export class GetAccountsComponent implements OnInit {
  customerId: number;
  bankAccounts: BankAccount[] = [];
  getAccountsForm: FormGroup;
  constructor(private accountService: AccountsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getAccountsForm = this.fb.group({
      customerId: ['', Validators.required]
    });
  }

  get() {
    this.accountService.getAccount(this.customerId).subscribe(res => {
      this.bankAccounts = res;
    });
  }
}
