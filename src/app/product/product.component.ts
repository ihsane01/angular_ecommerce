import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../component/products/products';
import { Commentaire } from '../models/commentaire';
import { DataService } from '../service/data.service';
import { PanierService } from '../service/panier.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public quantite=new FormControl('1',Validators.required);

  public product=<IProducts>{};
  public comment=<Commentaire>{};
  public commentaire=new FormControl('',Validators.required);
  public id_client=new FormControl('',Validators.required);
  public id_produit=new FormControl('',Validators.required);
  isLiked = null;
  id:any;
  data:any;
  public c = []  as any;
  products: Array<object> = [];
  constructor(private activatedRoute: ActivatedRoute,private dataService: DataService,private panier:PanierService,private router: Router,private productService:ProductService) { }






  data1:Array<any>;
  totalRecords:number=1;
  page:number=1;

  
  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];

    this.getProduct();
    this.getComments();
    this.productService.isLikedProduct(this.id).subscribe((res:any) => { this.isLiked = res.state});
  }
  toggleLike(id: any) {
    this.isLiked = null;
   this.productService.likeProduct(this.id).subscribe();
   this.productService.isLikedProduct(this.id).subscribe((res:any) => { this.isLiked = res.state});
 }
  getProduct(){
    this.dataService.ProductById(this.id).subscribe(res => { this.data = res; return this.product = this.data})
  }

 

  
  _addItemToCart( id:any): void {
    let payload = {
      productId: id,
      quantity:this.quantite.value,
      id_client:localStorage.getItem('id'),
    };
    this.panier.addToCart(payload).subscribe(() => {
      
  
      this.router.navigateByUrl('/panier')


    });

  }


  getComments(){
    this.dataService.GetDataComments(this.id).subscribe((data) => {  
      // this.c = res;
      this.data1 = data;
      this.totalRecords = data.length;
    })
  }

  addComment(id:any):void{
    let payload = {
      productId:id,
      commentaire:this.commentaire.value,
      id_client:localStorage.getItem('id'),
    };
    this.dataService.AddDataComment(payload).subscribe(res => { return this.getComments();
    });
  }
  
}
