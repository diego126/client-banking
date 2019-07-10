import {Component, OnInit} from '@angular/core';
import {AccountsService} from '../../../../core/services/accounts.service';
import {BankAccount} from '../../../../core/models/accounts/BankAccount';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../../core/services/customer.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent implements OnInit {
  customerId: number;
  bankAccount: BankAccount;
  createAccountForm: FormGroup;
  bankAccounts: BankAccount[];
  page = 1;
  totalRec: number;

  constructor(private accountService: AccountsService, private fb: FormBuilder, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadForm();
    this.getParams();
    this.fillAccounts();
  }

  getParams() {
    this.activeRoute.paramMap.subscribe(params => {
      this.customerId = Number(params.get('customerId'));
    });
  }

  loadForm() {
    this.createAccountForm = this.fb.group({
      number: ['', Validators.required],
      balance: ['', Validators.required],
    });
  }

  fillAccounts() {
    this.accountService.getAccount(this.customerId).subscribe(res => {
      this.bankAccounts = res.data;
    });
  }

  create() {
    this.bankAccount = new BankAccount(this.createAccountForm.value);
    this.accountService.createAccount(this.customerId, this.bankAccount).subscribe(res => {
      window.location.reload();
    });
  }
}
