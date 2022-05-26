import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './service/data.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(private dataservice:DataService,private _router:Router){}
  canActivate():boolean{
    if(this.dataservice.loggedIn()){
return false;}
    else
     {
      return true;
     }}}
  

