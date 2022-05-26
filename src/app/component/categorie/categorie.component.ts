import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { categorie } from 'src/app/models/categories.model';
import { DataService } from 'src/app/service/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  public categories= []  as any;
  public selectedcategorie=<categorie>{};
  public modaltitle = '';
  public buttontitle='';
  public nom=new FormControl('',Validators.required);

  public showError=false;
  modalRef?  : BsModalRef;
  
  
  
    constructor(private dataservise:DataService,private modalService: BsModalService,public fb: FormBuilder) {  }
      
  
  
  
    
    openModal(template: TemplateRef<any>,categorie?:categorie) {
      if(categorie){
        this.modaltitle='EDIT CATEGORIE';
        this.buttontitle='Update';
        this.selectedcategorie=categorie;
        this.nom.setValue(categorie.nom);
     
      }else{
        this.modaltitle='ADD CATEGORIE';
        this.buttontitle='save';
        this.reset();
  
      }
      this.modalRef = this.modalService.show(template);
    }
    ngOnInit(): void {
      this.getcategorieData();
      
     
    }
  
  getcategorieData(){
  // console.log('liste des produits ');
  // this.dataservise.liste().subscribe(res=>{
  //   console.log(res);
  this.dataservise.findAllCategory().subscribe(response=>this.categories=response)
  }
  delete(id:any){
      this.dataservise.deletecategories(id).subscribe(response=>{this.getcategorieData(),  {responseType: 'text'}
    
      })
    console.log(id);
  
  
  }
  save(){
  //   if(!this.description.value||!this.nom.value||!this.quantite.value|| !this.prix.value|| !this.image.value){
  //   this.showError=true;
  //   return;
  // }
    
    this.selectedcategorie.nom=this.nom.value;

    
    
    if(this.buttontitle=='Update'){
  this.dataservise.updatecategories(this.selectedcategorie).subscribe(Response=>{
    this.getcategorieData();
   this.reset();
   this.showError=false;
  this.modalRef?.hide();
  })
  }else{
      this.dataservise.addcategories(this.selectedcategorie).subscribe(Response=>{
      this.getcategorieData();
      this.reset();
      this.showError=false;
      this.modalRef?.hide();})
  
    }
  }
  reset(){
    this.nom.reset();

    // this.id_cat.reset();
  
  }
  


}
