import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../component/products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url='http://127.0.0.1:8000/api/product'

  constructor(private httpClient:HttpClient) {}

  isLikedProduct(produit_id: any) {
    const data = {
      user_id: localStorage.getItem('id'),
      product_id: produit_id
    }
    return this.httpClient.post(this._url+"/islike",data);

  }
  likeProduct(produit_id: any) {
    const data = {
      user_id: localStorage.getItem('id'),
      product_id: produit_id
    }
    return this.httpClient.post(this._url+"/like",data);

  }
  listlikes(id: any) {
    console.log(id)
    const data ={
      user_id:id
    }
    return this.httpClient.post(this._url+"/listlike",data);


  }
    
}