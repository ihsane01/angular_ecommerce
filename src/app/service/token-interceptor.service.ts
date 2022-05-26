import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector,private dataService: DataService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {{
    const token = this.dataService.getToken();
      let tokenizedReq=req.clone({
setHeaders:{
  Authrization:`Bearer ${token}` }
      })
      return next.handle(tokenizedReq)
  }
}}
