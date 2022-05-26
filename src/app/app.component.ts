import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e_commerce';
admin:any;
selecteduser: any; 
  constructor(private dataservice:DataService){
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

}

