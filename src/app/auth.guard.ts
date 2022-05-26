import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate,Router } from '@angular/router';
import { DataService } from './service/data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
 constructor(private dataservice:DataService,private _router:Router){}
  canActivate():boolean{
    if(this.dataservice.loggedIn()){
return true;}
    else
     {
      this._router.navigateByUrl('login');
      return false;
     }}}
  

