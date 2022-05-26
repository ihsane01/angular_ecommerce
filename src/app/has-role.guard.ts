import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './service/data.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  constructor(private dataservice:DataService,private _router:Router){}
  selecteduser: any; ;

 canActivate():boolean{
 this.selecteduser=localStorage.getItem('role');

if(this.selecteduser==2){
 return true;
}
else{
 return false;
}

}
}