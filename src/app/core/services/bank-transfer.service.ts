import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {RequestBankTransfer} from '../models/transactions/RequestBankTransfer';

@Injectable({
  providedIn: 'root'
})
export class BankTransferService {
  baseUrl = environment.baseUrl + '/api/transactions/';

  constructor(private http: HttpClient) {
  }

  performTransfer(requestBankTransfer: RequestBankTransfer): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'transfer', JSON.stringify(requestBankTransfer));
  }

  getBankTransfer(accountNumber: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + accountNumber + '/history');
  }
}
