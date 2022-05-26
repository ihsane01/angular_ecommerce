import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private _url='http://127.0.0.1:8000/api/'

  constructor(private httpClient:HttpClient) { }
  addcommandes(produits:any){
    return this.httpClient.post(this._url+"addcommande",produits);

  }
  
listecommande(id:any ){
  return this.httpClient.get(`${this._url+"showcommande"}/${id}`);

}
liste(){
  return this.httpClient.get(this._url+"listecommande");

}


updatecommande(product:any,id:any):Observable<any>{
  return this.httpClient.post<any>(`${this._url+"updatecommande"}/${id}`,product);}
}
