import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {GetPaginatedCustomerComponent} from './get-paginated-customer/get-paginated-customer.component';
import {NgxPermissionsGuard} from 'ngx-permissions';

const routes: Routes = [
  {
    path: '',
    component: CreateCustomerComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'canAddCustomer'
      }
    }
  },
  {
    path: 'get',
    component: GetPaginatedCustomerComponent,
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'canAccessCustomers'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
