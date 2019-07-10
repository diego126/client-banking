import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BankAccount} from '../models/accounts/BankAccount';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  baseUrl = environment.baseUrl + '/api/customers/';

  constructor(private http: HttpClient) {
  }

  createAccount(customerId: number, bankAccount: BankAccount): Observable<any> {
    return this.http.post<any>(this.baseUrl + customerId + '/accounts', JSON.stringify(bankAccount));
  }

  getAccount(customerId: number) {
    return this.http.get<any>(this.baseUrl + customerId + '/accounts');
  }
}
