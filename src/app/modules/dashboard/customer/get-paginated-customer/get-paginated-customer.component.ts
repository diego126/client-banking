import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {CustomerService} from '../../../../core/services/customer.service';
import {Customer} from '../../../../core/models/customers/Customer';
import {Router} from '@angular/router';
import {NgxPermissionsService} from 'ngx-permissions';

@Component({
  selector: 'app-get-paginated-customer',
  templateUrl: './get-paginated-customer.component.html',
  styleUrls: ['./get-paginated-customer.component.css']
})
export class GetPaginatedCustomerComponent implements OnInit, OnChanges {
  customers: Customer[] = [];
  @Input() parentData;
  @Output() childEvent = new EventEmitter();
  page = 1;
  totalRec: number;

  constructor(private customerService: CustomerService, private router: Router, private permissionService: NgxPermissionsService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getPaginated().subscribe(res => {
      this.customers = res.data;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.customers.concat(this.parentData);
  }

  goToAccounts(customer: Customer) {
    this.router.navigate(['/dashboard/accounts', customer.id]);
  }
}
