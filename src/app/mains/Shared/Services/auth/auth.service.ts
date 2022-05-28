import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DEVELOPMENT_IP } from 'src/app/mains/constants/constants';

import { URL } from 'src/app/mains/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private readonly mainUrl = `${URL}`;

    // private readonly mainUrl = `${DEVELOPMENT_IP}`;


  login(username, password): Observable<{}> {
    return this.http.post<Observable<{}>>(this.mainUrl + '/login', {username, password});
}


}
