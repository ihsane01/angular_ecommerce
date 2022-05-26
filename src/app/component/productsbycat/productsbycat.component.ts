import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categorie } from 'src/app/models/categories.model';
import { DataService } from 'src/app/service/data.service';
import { IProducts } from '../products/products';

@Component({
  selector: 'app-productsbycat',
  templateUrl: './productsbycat.component.html',
  styleUrls: ['./productsbycat.component.css']
})

export class ProductsbycatComponent implements OnInit {
 public  searchCategory=<categorie>{};
 public productlist= []  as any;
constructor(private activatedRoute: ActivatedRoute,

  private productservice: DataService){}
  @Input() Products!: IProducts[] ;

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(data => {
    console.log(data);
    this.searchCategory = data['id'];
    console.log(this.searchCategory);
    this.productservice.searchCategoryProducts(this.searchCategory).subscribe(categoryData => {
      console.log(categoryData);
      this.productlist = categoryData;
    });
  });

  }


  getProductData(){

    this.productservice.liste().subscribe(response=>this.productlist=response)
    }

    
  }

    