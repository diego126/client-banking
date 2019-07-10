import {Component, OnInit} from '@angular/core';
import {RequestBankTransfer} from '../../../../core/models/transactions/RequestBankTransfer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BankTransferService} from '../../../../core/services/bank-transfer.service';

@Component({
  selector: 'app-perform-bank-transfer',
  templateUrl: './perform-bank-transfer.component.html',
  styleUrls: ['./perform-bank-transfer.component.css']
})
export class PerformBankTransferComponent implements OnInit {
  requestBankTransfer: RequestBankTransfer;
  bankTransferForm: FormGroup;

  constructor(private fb: FormBuilder, private bankTransferService: BankTransferService) {
  }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.bankTransferForm = this.fb.group({
      fromAccountNumber: ['', Validators.required],
      toAccountNumber: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  performTransfer() {
    this.requestBankTransfer = new RequestBankTransfer(this.bankTransferForm.value);
    this.bankTransferService.performTransfer(this.requestBankTransfer).subscribe(res => {
      // TODO: show notification after performed transfer
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }
}
