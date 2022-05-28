import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL} from '../../constants/constants';


@Injectable({
    providedIn: 'root'
})


export  class  EnteredService{

    constructor(private http: HttpClient) {
    }

    newCardInfo(data: any){
        return this.http.post<any>(URL + '/uzcardTokens', data);
    }

    newCardPanInfo(data: any){
        return this.http.post<any>(URL + '/uzcardPan', data);
    }

}
