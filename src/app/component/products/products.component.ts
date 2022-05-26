import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { IProducts } from './products';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { categorie } from 'src/app/models/categories.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public products= []  as any;
public selectedProduct=<IProducts>{};
public modaltitle = '';
public buttontitle='';
categorie: any;
showAdd!:boolean;
showUpdate!:boolean;
imagepath:any='http://127.0.0.1:8000/public/assets/images/'
myForm = new FormGroup({
  nom: new FormControl('', [Validators.required]),
  file: new FormControl('', [Validators.required]), 
  description: new FormControl('', [Validators.required]), 
  quantite: new FormControl('', [Validators.required]), 
  prix: new FormControl('', [Validators.required]), 
  id_cat: new FormControl('', [Validators.required]), 
 });
 title = 'angularlaraveluploadimage';
 filedata:any;
 nom :any;
 description :any;
 quantite :any;
 prix :any;
 id_cat :any;
id_updated:any
 fileEvent(e:any ){
  this.filedata = e.target.files[0];
}




public showError=false;
modalRef?  : BsModalRef;



  constructor(private http: HttpClient,private dataservise:DataService,private modalService: BsModalService,public fb: FormBuilder) {  }
    



  
  openModal(template: TemplateRef<any>,product?:IProducts) {
    
    if(product){
      this.modaltitle='EDIT PRODUCT';
      this.buttontitle='Update';
     
    }else{
      this.modaltitle='ADD PRODUCT';
      this.buttontitle='save';
    }
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
    this.getProductData();
    this.dataservise.findAllCategory().subscribe(data =>{
      this.categorie=data ;
    },
    error=>{
      console.log(error);
    })


  }

  Clearform(){
    this.myForm.setValue({code:0,name:'',email:'',phone:'',designation:''})
  }

getProductData(){

this.dataservise.liste().subscribe(response=>this.products=response)
}
delete(id:any){
    this.dataservise.delete(id).subscribe(response=>{this.getProductData(),  {responseType: 'text'}
  
    })
  console.log(id);
  }

 get f() {
   
    return this.myForm.controls;
  
  }
  onedit(pro :any){
    this.showAdd=false;
    this.showUpdate=true;
   this.id_updated=pro.id
    this.myForm.controls['nom'].setValue(pro.nom)
    this.myForm.controls['description'].setValue(pro.description)
    this.myForm.controls['quantite'].setValue(pro.quantite)
    this.myForm.controls['prix'].setValue(pro.prix)
  }
  onSubmit() {
    

    this.nom=this.myForm.get('nom')?.value;
    this.description=this.myForm.get('description')?.value;
    this.quantite=this.myForm.get('quantite')?.value;
    this.prix=this.myForm.get('prix')?.value;
    this.id_cat=this.myForm.get('id_cat')?.value;
    var myFormData = new FormData();
    const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');
  myFormData.append('image', this.filedata);
  myFormData.append('nom', this.nom);
  myFormData.append('description', this.description);
  myFormData.append('quantite', this.quantite);
  myFormData.append('prix', this.prix);
  myFormData.append('id_cat', this.id_cat);
this.http.post('http://127.0.0.1:8000/api/Addproduct', myFormData, {
headers: headers
}).subscribe(data => {
  console.log(data);
  this.getProductData();
  this.myForm.reset( )
  let ref =document.getElementById('cancel')
  ref?.click()
});


}
onupdate(){

  this.nom=this.myForm.get('nom')?.value;
  this.description=this.myForm.get('description')?.value;
  this.quantite=this.myForm.get('quantite')?.value;
  this.prix=this.myForm.get('prix')?.value;
  this.id_cat=this.myForm.get('id_cat')?.value;
  var myFormData = new FormData();
  const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');
myFormData.append('image', this.filedata);
myFormData.append('nom', this.nom);
myFormData.append('description', this.description);
myFormData.append('quantite', this.quantite);
myFormData.append('prix', this.prix);
myFormData.append('id_cat', this.id_cat);
this.dataservise.update(myFormData,this.id_updated).subscribe(data=>{
console.log(data);
this.getProductData();
this.myForm.reset( )
let ref =document.getElementById('cancel')
ref?.click()
});
}

clickaddproduct(){
  this.myForm.reset();
  this.showAdd=true;
  this.showUpdate=false;
}


reset(){
  this.description.reset();
  this.nom.reset();
  this.quantite.reset();
  this.prix.reset();
  this.id_cat.reset();

}




}
