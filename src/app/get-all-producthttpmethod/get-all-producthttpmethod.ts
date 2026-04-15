import { Component, OnInit ,Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Step 1
import { CommonModule} from '@angular/common';
import { Httpmethodsservices } from '../services/httpmethodsservices';
import {ProductItem} from '../interfaces/product';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-get-all-producthttpmethod',
  imports: [CommonModule],
  templateUrl: './get-all-producthttpmethod.html',
  styleUrl: './get-all-producthttpmethod.css',
})

export class GetAllProducthttpmethod implements OnInit {

  constructor(private route: ActivatedRoute , private httpmethodsservices:Httpmethodsservices)  { } // Step 2

  productId: string | null = null;
  category: string | null = null;
  products: ProductItem[] = [];
  


  //http://localhost:4200/productdetails/5?category=electronics&page=1
  ngOnInit() {

    // 1. Capture Path Parameter (/product/:id)
    this.productId = this.route.snapshot.paramMap.get('id');

    // 2. Capture Query Parameters (?category=...)
    // Use subscribe if you expect these to change without leaving the page
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      
    });
    this.getAllProducts();
   
  }

  getAllProducts(): void {

    this.httpmethodsservices.getAllProducts().subscribe(
      (productDetails: any) => {
        console.log("Product Data Received");
        this.products=productDetails.products || productDetails; //  Array of Object (ProductItem) ProductItem[]
        console.log(this.products);
      },
      (error) => {
        console.error("Error fetching product data:", error);


      });
  }
}
