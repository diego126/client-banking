import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../../core/services/customer.service';
import {Customer} from '../../../../core/models/customers/Customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer;
  customerForm: FormGroup;

  constructor(private customerService: CustomerService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  create() {
    this.customer = new Customer(this.customerForm.value);
    this.customerService.createCustomer(this.customer).subscribe(res => {
      // TODO: handle event changes in child component instead
      window.location.reload();
    });
  }
}
