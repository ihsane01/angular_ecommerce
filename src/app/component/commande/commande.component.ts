import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { commande } from 'src/app/models/commande.model';
import { CommandeService } from 'src/app/service/commande.service';
import { BsModalService } from 'ngx-bootstrap/modal'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],


})
export class CommandeComponent implements OnInit {
  public commandes= []  as any;
  public image= []  as any;

  public selectedcommande=<commande>{};
  public modaltitle = '';
  public buttontitle='';
  myForm = new FormGroup({
 etat:new FormControl('',Validators.required),
  });
  etat :any;
  id_updated:any
  showUpdate!:boolean;
  public showError=false;
  modalRef?  : BsModalRef;
  
  constructor(private modalService: BsModalService,private commandeservices:CommandeService,private http: HttpClient) { }

  ngOnInit(): void {
    this.liste()
  }
  liste(): void {
    this.commandeservices.liste().subscribe((response:any)=>{
      this.commandes=response.commande;
      this.image=response.imagepro;

    })
  
    }

    openModal(template: TemplateRef<any>,commande?:commande) {
        if(commande)
        {this.modaltitle='EDIT CATEGORIE';
        this.buttontitle='Update';
    
      
    }
    this.modalRef = this.modalService.show(template);
  }
  
    onedit( cmd:any){
      this.id_updated=cmd.id


      this.myForm.controls['etat'].setValue(cmd.etat)

      this.showUpdate=true;

    }
    

    get f() {
   
      return this.myForm.controls;
    
    }
    onupdate(){

    
      this.selectedcommande.etat=this.myForm.get('etat')?.value;
   
    var myFormData = new FormData();
    const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');
  this.commandeservices.updatecommande( this.selectedcommande,this.id_updated).subscribe(data=>{

    console.log(data);
    this.liste();
    this.myForm.reset( )
    let ref =document.getElementById('cancel')
    ref?.click()

  })

  this.showUpdate=false;
  }
  
  reset(){
    this.etat.reset();  
  }
  
}
