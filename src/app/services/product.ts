import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Step 1 - Import HttpClient and HttpErrorResponse
import { catchError, throwError, tap, Observable, map, from } from 'rxjs';
import { ProductItem } from '../interfaces/Iproductdetails';

@Injectable({
  providedIn: 'root'
})
export class Product {
    // Attempt to inject HttpClient if provided; if not, fall back to fetch()
    //private apiBase = 'https://fakestoreapi.com/products';
  private apiBase = 'https://dummyjson.com/products'; // API base enpoint
  
  private httpClientRequest: HttpClient | null = inject(HttpClient, { optional: true } as any);

  


  constructor(  ) {  }

  // Helper to perform fetch-based requests when HttpClient is not available
  private fetchJson<T>(url: string, init?: RequestInit): Observable<T> {
    return from(
      fetch(url, init).then(async res => {
        if (!res.ok) {
          const text = await res.text();
          const err = new Error(res.statusText || 'Network error');
          (err as any).status = res.status;
          (err as any).body = text;
          throw err;
        }
        return (res.json() as Promise<T>);
      })
    );
  }

  // Method to Get all products
  getAllProducts(): Observable<ProductItem[]> {
    console.log("Get All Products Method Called");
    if (this.httpClientRequest) {
      return this.httpClientRequest.get<ProductItem[]>(this.apiBase).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('HTTP Error:', error);
          return throwError(() => error);
        })
      );
    } else {
      return this.fetchJson<ProductItem[]>(this.apiBase).pipe(
        catchError((error) => {
          console.error('Fetch Error:', error);
          return throwError(() => error);
        })
      );
    }
  }

  // Method to Get single product
  getProductById(id: number | null): Observable<ProductItem> {
    console.log("Get Single Product Method Called");
    const url = `${this.apiBase}/${id}`;
    if (this.httpClientRequest) {
      return this.httpClientRequest.get<ProductItem>(url).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('HTTP Error:', error);
          return throwError(() => error);
        })
      );
    } else {
      return this.fetchJson<ProductItem>(url).pipe(
        catchError((error) => {
          console.error('Fetch Error:', error);
          return throwError(() => error);
        })
      );
    }
  }

  // Method to Post
  addNewProduct(productData: ProductItem): Observable<ProductItem> {
    console.log("Add New Product Method Called");
    if (this.httpClientRequest) {
      return this.httpClientRequest.post<ProductItem>(this.apiBase, productData).pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('HTTP Error:', error);
          return throwError(() => error);
        })
      );
    } else {
      return this.fetchJson<ProductItem>(this.apiBase, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      }).pipe(
        catchError((error) => {
          console.error('Fetch Error:', error);
          return throwError(() => error);
        })
      );
    }
  }

  updateProduct(productID: number, productData: ProductItem): Observable<ProductItem> {
    console.log("Update product based on product id");
    const url = `${this.apiBase}/${productID}`;

    if (this.httpClientRequest) {
      // Use simple put returning body directly
      return this.httpClientRequest.put<ProductItem>(url, productData).pipe(
        tap(() => console.log('Update request succeeded')),
        catchError((error: HttpErrorResponse) => {
          console.error('HTTP Error:', error);
          return throwError(() => error);
        })
      );
    } else {
      return this.fetchJson<ProductItem>(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      }).pipe(
        catchError((error) => {
          console.error('Fetch Error:', error);
          return throwError(() => error);
        })
      );
    }
  }

  deleteProduct(productID: number): Observable<ProductItem> {
    console.log("Delete product based on product id");
    const url = `${this.apiBase}/${productID}`;

    if (this.httpClientRequest) {
      return this.httpClientRequest.delete<ProductItem>(url).pipe(
        tap(() => console.log('Delete request succeeded')),
        catchError((error: HttpErrorResponse) => {
          console.error('HTTP Error:', error);
          return throwError(() => error);
        })
      );
    } else {
      return this.fetchJson<ProductItem>(url, { method: 'DELETE' }).pipe(
        catchError((error) => {
          console.error('Fetch Error:', error);
          return throwError(() => error);
        })
      );
    }
  }
}