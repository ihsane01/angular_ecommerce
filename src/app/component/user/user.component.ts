import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
liste:any
constructor(private http: HttpClient,private dataservise:DataService) {  }

  ngOnInit(): void {
    this.getuserData();
  }





getuserData(){

this.dataservise.users().subscribe(response=>this.liste=response)
}
}
