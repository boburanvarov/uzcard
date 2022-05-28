import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from '../Services/data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard  implements CanActivate {

  constructor(
    private router: Router,
    private data: DataService,
  ) {
  }


  canActivate(next: ActivatedRouteSnapshot): boolean | Observable<boolean> {

    const user = this.data.getUserToken();
    const role = this.data.getUserRole();

    // console.log("user", user);
    // console.log("role", role);


    if (!user && (role !== 'ROLE_ADMIN' || role !== 'ROLE_VASH')) {

      this.router.navigate(['/auth']).then();
      return false;

    }


    return true;
  }
}
