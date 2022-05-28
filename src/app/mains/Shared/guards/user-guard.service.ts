import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from '../Services/data.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

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

     if (role !== 'ROLE_ADMIN' || role === 'ROLE_USER') {
      this.router.navigate(['/']).then();
      return false;
    }

    return true;
  }

}
