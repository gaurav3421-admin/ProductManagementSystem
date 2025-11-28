import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Productdummyservice } from '../services/productdummyservice'
import { ProductItem } from '../interfaces/Iproductdetails';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';  // ag-Grid Community Modules
import { AgGridAngular, AgGridModule } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface


//Step 2-  Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);


@Component({
  selector: 'app-product-details',
  imports: [CommonModule, AgGridAngular, AgGridModule, RouterModule], //Step3-  Register all Community features
  templateUrl: './get-product-details.html',
  styleUrls: ['./get-product-details.css']

})
export class GetProductDetails implements OnInit {

  // Observable to hold the products data stream
  products$!: Observable<ProductItem[]>;
  isLoading = true;
  errorMessage: string | null = null;

  // declare a variable to hold product data
  isBrowser: boolean;
  products: ProductItem[] = [];
  rowData: any[] = [];

  colDefs: ColDef[] = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Title', field: 'title', sortable: true, filter: true },
    { headerName: 'Brand', field: 'brand', sortable: true, filter: true },
    { headerName: 'Category', field: 'category', sortable: true, filter: true },
    { headerName: 'Price ($)', field: 'price', sortable: true, filter: true },
    { headerName: 'Stock', field: 'stock', sortable: true, filter: true },
    { headerName: 'Rating', field: 'rating', sortable: true, filter: true },
    { headerName: 'Availability', field: 'availabilityStatus' },
    { headerName: 'Warranty', field: 'warrantyInformation' },
    { headerName: 'Shipping', field: 'shippingInformation' },
    { headerName: 'Return Policy', field: 'returnPolicy' },
    {
      headerName: 'Actions',
      cellRenderer: (params: any) => {
        return `
        <button class="btn btn-sm btn-primary edit-btn" data-id="${params.data.id}">
          Edit
        </button>
        <button class="btn btn-sm btn-danger delete-btn" data-id="${params.data.id}">
          Delete
        </button>
      `;
      }
    }

  ];

  //Constructor
  //Step4-  Register all Community features
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _productdummyservice: Productdummyservice, private route: ActivatedRoute) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }



  ngOnInit() {
    console.log("Product Data Received");
    this._productdummyservice.getAllProducts().subscribe(
      (data: any) => {
        console.log("Product Data Received");
        console.log(data);
        this.rowData = data.products || data;
      },
      (error) => {
        console.error("Error fetching product data:", error);
        this.errorMessage = 'Failed to load products';
        this.isLoading = false;
      });
  }

}

