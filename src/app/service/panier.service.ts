import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { panier } from '../models/panier.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
cartdata:any=[];
public cartItemList : any =[]


private _url='http://127.0.0.1:8000/api/'
productlist=new BehaviorSubject<any>([])


constructor(private http: HttpClient) {}

addToCart(payload:any) {
  return this.http.post(this._url+"addtopanier", payload);
}
getCartItems(id:any) {
  return this.http.get(`${this._url+"listepanier"}/${id}`);
}

delete(id:any){
  return this.http.delete(`${this._url+"deletepanier"}/${id}`);

}
getTotalPrice() : number{
  let grandTotal = 0;
  this.cartItemList.map((a:any)=>{
    grandTotal += a.prix_product*a.quantite_product;
    

  })
  return grandTotal;
}
// increaseQty(payload:any) {
//   return this.http.post(`${environment.baseURL}/cart`, payload);
// }
emptyCart(id:any) {
  return this.http.delete(`${this._url+"deleteallpanier"}/${id}`);
}
}

