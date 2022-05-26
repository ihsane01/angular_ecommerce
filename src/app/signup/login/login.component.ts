import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selecteduser: any ;

  loginForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private Dataservise:DataService,private router: Router,private toastr: ToastrService) { }
  ngOnInit(): void { }
  
loginUser(){
 //  console.log(this.loginForm.value)
this.Dataservise.loginUser(this.loginForm.value).subscribe(res=>{
console.log(res)
if(res!=1){
localStorage.setItem('access_token',res.access_token)
localStorage.setItem('role',JSON.stringify(res.user.role))
localStorage.setItem('id',JSON.stringify(res.user.id))
this.selecteduser=localStorage.getItem('role') ;
this.toastr.success('welcom!');

if(this.selecteduser==2)
this.router.navigateByUrl('Products')
else{
  this.router.navigateByUrl('')

}}
else{
  this.toastr.error('verifier votre cordonnées');

}

// if(localStorage.getItem('role'))
// {
//   this.toastr.success('welcom');

// }
// else{
//   this.toastr.error('Hello world!', 'Toastr fun!');
// }


 },

err=>console.log(err))// alertify.error('Error')})

// runsuccess(){
  
// }
// runError(){
//   alertify.error('Error');
  
// }
}}
