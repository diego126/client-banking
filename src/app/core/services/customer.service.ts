import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/customers/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.baseUrl + '/api/customers';

  constructor(private http: HttpClient) {
  }
  createCustomer(customer: Customer): Observable<any> {
    return this.http.post<any>(this.baseUrl, JSON.stringify(customer));
  }

  getPaginated(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
