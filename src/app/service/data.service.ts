import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducts } from '../component/products/products';
import { user } from '../signup/register/user';
import { categorie } from '../models/categories.model';
import { Commentaire } from '../models/commentaire';



@Injectable({
  providedIn: 'root'
})


export class DataService {

private _url='http://127.0.0.1:8000/api/'
  constructor(private httpClient:HttpClient) {}
    // getData(){
    //   return this.httpClient.get('http://127.0.0.1:8000/api/products');
    // }
   liste():Observable<IProducts[]>{

     return this.httpClient.get<IProducts[]>(this._url+"Products");
   }
   users():Observable<IProducts[]>{

     return this.httpClient.get<IProducts[]>(this._url+"users");
   }
   add (product:IProducts):Observable<IProducts>
{
  return this.httpClient.post<IProducts>(this._url+"Addproduct",product);
}

update(product:any,id:any):Observable<any>{
  return this.httpClient.post<any>(`${this._url+"updateProduct"}/${id}`,product);

}
delete(id:any){
  return this.httpClient.delete(`http://127.0.0.1:8000/api/delete/`+id);

}
  








searchCategoryProducts(cat:any):Observable<IProducts[]>{

  return  this.httpClient.get<IProducts[]>(`${this._url+"productde"}/${cat}`);
}

addcategories (categorie:categorie):Observable<categorie>
{
  return this.httpClient.post<categorie>(this._url+"Addcategories",categorie);
}

updatecategories(categorie:categorie):Observable<categorie>{
  return this.httpClient.put<categorie>(`${this._url+"updatecategories"}/${categorie.id}`,categorie);

}
deletecategories(id:any){
  return this.httpClient.delete(`http://127.0.0.1:8000/api/deletecategories/`+id);

}
public findCategory(id:number) :Observable<categorie>{
  return this.httpClient.get<categorie>(this._url + "categories/"+id);
}
public findAllCategory() :Observable<categorie>{
  return this.httpClient.get<categorie>(this._url + "categories");
}
// public ProductById(id:number) :Observable<IProducts>{
//   return this.httpClient.get<IProducts>(this._url + "getProductByid/"+id);
// }

public ProductById(id:any){
  return this.httpClient.get('http://127.0.0.1:8000/api/Product/'+id)
}

public AddDataComment(payload:any)
{
  return this.httpClient.post('http://127.0.0.1:8000/api/AddComment',payload);
}

public GetDataComments(id:any):Observable<Commentaire[]>{

  return this.httpClient.get<Commentaire[]>('http://127.0.0.1:8000/api/Comments/'+id);
}












registerUser(user:user){
return this.httpClient.post<any>(this._url+"register",user);
}
loginUser(user:user){
  return this.httpClient.post<any>(this._url+"login",user);
}
loggedIn(){
  return !!localStorage.getItem('access_token');
}
getToken(){
  return localStorage.getItem('access_token');
}
logoutUser(){
 localStorage.removeItem('access_token');
 localStorage.removeItem('role');
 localStorage.removeItem('user_id');
 localStorage.removeItem('id');

}
}
