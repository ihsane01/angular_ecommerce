import { Component, Input, OnInit } from '@angular/core';
import { commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/service/commande.service';
import { DataService } from 'src/app/service/data.service';
import { ProductService } from 'src/app/service/product.service';
import { LoginComponent } from 'src/app/signup/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public commandesliste= []  as any;
  public likeliste= []  as any;
 
  
id:any;
etat:any;
admin:any
selecteduser:any
  constructor(private commandeservices:CommandeService,private dataservice:DataService,private productservice:ProductService){}

  ngOnInit(): void {
   this.listecommande();
   if(localStorage.getItem('role') != null)
   { this.selecteduser=localStorage.getItem('role')
if( this.selecteduser==2){
this.admin=false;
}
else{
  this.admin=true;
}}
else{
  this.admin=false;
}
  }


  listecommande(): void {
    this.id=localStorage.getItem('id')
    this.commandeservices.listecommande(this.id).subscribe((response:any)=>{
      this.commandesliste=response;
    
    })
    
      
    }
    listelike(){
      
    this.id=localStorage.getItem('id')
    this.productservice.listlikes(this.id).subscribe((response:any)=>{
      this.likeliste=response;
      console.log(response)
    })
    
      
    }
  
  islogin():boolean{
   if( this.dataservice.loggedIn()){
     return true;
   }
   else{
   return false;
  }
}
logout(){
  this.dataservice.logoutUser();

}

}
