import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import {LoadingService} from '../Services/loading.service';
import {DataService} from '../Services/data.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor(private data: DataService ,private loadingService: LoadingService,
             ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      let authHeaderString = this.data.getUserToken();
      this.loadingService.isLoading.next(true);

      if (authHeaderString) {
          req = req.clone({
              setHeaders: {
                  Authorization: 'Bearer ' + authHeaderString,
              },
          });
      }
      return next.handle(req).pipe(
        finalize(
          ()=>{
            this.loadingService.isLoading.next(false)
          }
        )
      );
  }
}

