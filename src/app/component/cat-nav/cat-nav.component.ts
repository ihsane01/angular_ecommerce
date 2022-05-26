import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categorie } from 'src/app/models/categories.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cat-nav',
  templateUrl: './cat-nav.component.html',
  styleUrls: ['./cat-nav.component.css']
})
export class CatNavComponent implements OnInit {

  public categories= []  as any;
  constructor(private activatedRoute: ActivatedRoute,
  
    private productservice: DataService){}
    @Input() Products!: categorie[] ;

  ngOnInit(): void {
   
    

      this.productservice.findAllCategory().subscribe(response=>this.categories=response)
      
  }
}
