import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { panier } from 'src/app/models/panier.model';
import { PanierService } from 'src/app/service/panier.service';
import { IProducts } from '../products/products';
import { ToastrService } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';
import { CommandeService } from 'src/app/service/commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  @Input() Products!: panier[] ;
  public  idproduct:any;
  public  idclient:any;
  public products= []  as any;
  carts :any;
  cartDetails:any;
  id:any;
  public livraison= 200;
 

  public grandTotal !: number;
  constructor(private activatedRoute: ActivatedRoute,private commandeservice: CommandeService,

    private panierservice: PanierService,private toastr: ToastrService,private panier:PanierService,private router: Router) { }
  
  ngOnInit(): void {
   
    this._getCart();
  

    }

    _getCart(): void {
      this.id=localStorage.getItem('id')
      this.panierservice.getCartItems(this.id).subscribe((response:any)=>{
        this.products=response.produits;
        console.log(response.produits);
        this.grandTotal =response.total
      })
        
      }
    
    
    delete(id:any){
      this.panierservice.delete(id).subscribe(response=>{this._getCart(),  {responseType: 'text'}
    
      })
      this.toastr.success('Hello world!', 'Toastr fun!');

    console.log(id);
  
    }
 
 
vider(){
  this.id=localStorage.getItem('id')

  this.panierservice.emptyCart( this.id).subscribe( 
    
      )
      this.toastr.info('votre panier est vide');
      this._getCart();
}
addcommande(){
  let produits = {
    products:this.products,
    id_client:localStorage.getItem('id'),
    total:this.grandTotal+this.livraison
    
  };

  this.commandeservice. addcommandes(produits).subscribe((response:any)=>{
  
    this.router.navigateByUrl('panier')
    this.vider()
  })
}

  }