import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { IProducts } from '../products/products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  public products= []  as any;
  constructor(private activatedRoute: ActivatedRoute,
  
    private productservice: DataService){}
    @Input() Products!: IProducts[] ;

  ngOnInit(): void {
   
    

      this.productservice.liste().subscribe(response=>this.products=response)
      
  }

}
