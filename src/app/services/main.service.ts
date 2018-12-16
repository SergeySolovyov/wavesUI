import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient }    from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class MainService {

  constructor(private http: HttpClient) { }
  getDetails(assetId:string): Observable<any> {
    return this.http.get('http://nodes.wavesplatform.com/assets/details/' + assetId);
  }

}