import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { IntegrationAPI } from '../common/swagger-providers/integration-api.provider';

const header = new HttpHeaders({
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': "f06b31c2d9d394151718c7e634eff6d7" // Note: Static token added for testing.
});

@Injectable()
export class CustomerService {
  public headers: HttpHeaders;

  constructor(
    private api: IntegrationAPI,
    private http: HttpClient
  ) { this.headers = new HttpHeaders(); }

  getAll(params: any): Observable<any> {
    let ledgerRequest = this.api.ListLedgers(params, header);
    return ledgerRequest;
  };

}