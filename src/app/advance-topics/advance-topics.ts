import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Productdummyservice } from '../services/productdummyservice'
import { ProductItem } from '../interfaces/Iproductdetails';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-advance-topics',
  imports: [CommonModule, RouterModule], //Step3-  Register all Community features
  templateUrl: './advance-topics.html',
  styleUrl: './advance-topics.css',
})
export class AdvanceTopics implements OnInit {

  productNames: string[] = [];
  productTitles: string[] = [];
  expensiveProducts: ProductItem[] = [];
  safeProducts: ProductItem[] = [];
  //Constructor

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _productdummyservice: Productdummyservice, private route: ActivatedRoute) {

  }


  ngOnInit() {

    // call fetchProductNames
    this.fetchProductNames().subscribe(
      (responeData) => {
        this.productNames = responeData;
        console.log('Product Titles:', responeData);
      }
    );

    this.fetchProductTitles().subscribe((titles) => {
      console.log('Product Titles:', titles);
      this.productTitles = titles;
    });

    this.fetchExpensiveProducts(500).subscribe((products) => {
      console.log('Expensive Products:', products);
      this.expensiveProducts = products;
    });
    this.fetchProductsWithErrorHandling().subscribe((products) => {
      console.log('Products with Error Handling:', products);
      this.safeProducts = products;
    });

  }

  // map Operator and pipe Operator Examples
  fetchProductNames(): Observable<string[]> {
    return this._productdummyservice.getAllProducts().pipe(
      map((data: any) => {
        return (data.products || data).map((item: ProductItem) => item.title);
      })
    );
  }

  // SwitchMap Operator Example
  fetchProductTitles(): Observable<string[]> {
    return this._productdummyservice.getAllProducts().pipe(
      switchMap((data: any) => {
        const titles = (data.products || data).map((item: ProductItem) => item.title);
        return of(titles);
      })
    );
  }

  // Filter Operator Example
  fetchExpensiveProducts(minPrice: number): Observable<ProductItem[]> {
    return this._productdummyservice.getAllProducts().pipe(
      switchMap((data: any) => {
        const expensiveProducts = (data.products || data).filter((item: ProductItem) => typeof item.price === 'number' && item.price > minPrice);
        return of(expensiveProducts);
      })
    );
  }

  // catchError Operator Example
  // (You can implement this method similarly if needed)
  fetchProductsWithErrorHandling(): Observable<ProductItem[]> {
    return this._productdummyservice.getAllProducts().pipe(
      catchError((error) => {
        console.error('Error fetching products:', error);
        return of([]); // Return an empty array in case of error
      })
    );
  }

}
