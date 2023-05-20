import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  role= localStorage.getItem("role");
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      {
        console.log(this.role)
          if( this.role == "Admin"){
       this.router.navigateByUrl('/home/contact')
         return true;
    
       }
       alert("Your Role must be Admin Please Login")
       this.router.navigateByUrl('/login')
          return false;
      }
    return true;
  }
  
}
