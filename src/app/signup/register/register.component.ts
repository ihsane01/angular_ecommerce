import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { user } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user=<user>{};
   profileForm = new FormGroup({
    email: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private dataservise:DataService,private router: Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    // console.log(this.profileForm.value)
this.dataservise.registerUser(this.profileForm.value).subscribe(res=>{
  console.log(res)
//  localStorage.setItem('access_token',res.access_token)
this.router.navigateByUrl('/login')}
,err=>console.log(err))
  }
  
}
