import { Injectable, inject } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';// Step 1 - Import HttpClient and HttpErrorResponse
import { ProductItem } from '../interfaces/product';
import { IProductDelete } from '../interfaces/Iproductdetails';


@Injectable({
  providedIn: 'root', //  Specify the root injector
  //providedIn: 'module', // Specify the module where the service should be provided
  //providedIn: 'platform', // Specify the platform where the service should be provided

})
export class Httpmethodsservices {

  private apiURL = 'https://dummyjson.com/products'; // API base enpoint'
  private apiURLaddProduct = 'https://dummyjson.com/products/add';

  private _httpClientRequest: HttpClient | null = inject(HttpClient); // Step 2 - Method 1- Inject HttpClient by inject
  private _productItem: Observable<ProductItem> | null = null;
  //constructor( private http:HttpClient  ) { }; // Step 2 - Method 2- Inject HttpClient by constructor 1

  getAllProducts(): Observable<ProductItem[]> {

    console.log("This is service Method :getAllProducts() calling");
    if (this._httpClientRequest) {
      
      //return this._httpClientRequest.get<ProductItem[]>(this.apiURL);
      //this._httpClientRequest.get<ProductItem[]>( 'https://dummyjson.com/products');  
      // Return array of object (Product) 
      // T - ProductItem[]
      // Return  Observable <T>  : Observable <ProductItem[]> 
      return this._httpClientRequest.get<ProductItem[]>(this.apiURL);


    } else {
      return of([]);
    }

  }

// Method for post 
// private apiURLaddProduct = 'https://dummyjson.com/products/add';
 addProductDetails(product: ProductItem): Observable<ProductItem> {

    if (this._httpClientRequest) {
      return this._httpClientRequest.post<ProductItem>(this.apiURLaddProduct, product);
    } else {
      // Fallback: return the provided product wrapped in an Observable when HttpClient isn't available.
      return of(product as ProductItem);
    }

 }

private apiURLSearchProduct = 'https://dummyjson.com/products/search';
//'https://dummyjson.com/products/search?q=phone'
 searchProduct(searchText: string): Observable<ProductItem[]> {

  if (this._httpClientRequest) {
    return this._httpClientRequest.get<ProductItem[]>(`${this.apiURLSearchProduct}?q=${searchText}`);
  } else {
    return of([]);
  }
}

private apiURLDeleteProduct = 'https://dummyjson.com/products';
//'https://dummyjson.com/products/1'
  deleteProductDetails(productID: number): Observable<IProductDelete | null> {
    if (this._httpClientRequest) {
      return this._httpClientRequest.delete<IProductDelete>(`${this.apiURLDeleteProduct}/${productID}`);
    } else {
      return of(null);
    }
  }


//Method to get Country List
  getCountryList(): any {

    const countryList = [
      { id: 1, countryName: 'India' },
      { id: 2, countryName: 'USA' },
      { id: 3, countryName: 'Australia' },
      { id: 4, countryName: 'Canada' }
    ]
    return of(countryList)

  }

  //Method to get State List
  getStateList(): any {

    const stateList = [
      { id: 1, stateName: 'Maharashtra', countryId: 1 },
      { id: 2, stateName: 'California', countryId: 2 },

    ]
    return of(stateList)

  }


}


///

// How to create Service
// Elements explained
// How to inject service into multiple components


