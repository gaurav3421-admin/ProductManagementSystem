import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Product  } from '../services/product';
import { ProductItem} from '../interfaces/product';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';  // ag-Grid Community Modules
import { AgGridAngular, AgGridModule } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface



//Step 2-  Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, AgGridAngular, AgGridModule], //Step3-  Register all Community features
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {

  
  // declare a variable to hold product data
  isBrowser: boolean;
  products: ProductItem[] = [];
  rowData: any[] = [];
  
  colDefs: ColDef[] = [
    { field: "id" },
    { field: "title" },
    { field: "price" },
    { field: "description" },
    { field: "category" },
    {
      headerName: "Image",
      field: "image",
      cellRenderer: (params:any) => `<img src="${params.value}" alt="Product Image" style="height:40px;">`
    },
    {
      headerName: "Rating",
      valueGetter: (params) => params.data.rating?.rate
    },
    {
      headerName: "Count",
      valueGetter: (params) => params.data.rating?.count
    }
  ];

  //Constructor
  //Step4-  Register all Community features
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _productService: Product) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }




  ngOnInit(): void {
    
    console.log("Product Data Received");
    this._productService.getAllProducts().subscribe(
      (data) => {
        console.log("Product Data Received");
        console.log(data);
        //console.log(data.title);
        //this.products = data;
        this.rowData = data;
      },
      (error) => {
        console.error("Error fetching product data:", error);
      });
  }

}
