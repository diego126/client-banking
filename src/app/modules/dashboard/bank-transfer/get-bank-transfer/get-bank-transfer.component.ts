import {Component, OnInit} from '@angular/core';
import {BankTransferService} from '../../../../core/services/bank-transfer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-get-bank-transfer',
  templateUrl: './get-bank-transfer.component.html',
  styleUrls: ['./get-bank-transfer.component.css']
})
export class GetBankTransferComponent implements OnInit {
  getHistoryForm: FormGroup;
  accountNumber: string;
  histories = [];

  constructor(private bankTransfer: BankTransferService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getHistoryForm = this.fb.group({
      accountNumber: ['', Validators.required]
    });
  }


  getHistory() {
    this.accountNumber = this.getHistoryForm.controls.accountNumber.value;
    this.bankTransfer.getBankTransfer(this.accountNumber).subscribe(res => {
      this.histories = res.data;
      console.log(res.data);
    });
  }
}
