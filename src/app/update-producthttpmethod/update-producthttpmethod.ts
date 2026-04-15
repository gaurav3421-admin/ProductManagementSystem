import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { ProductItem } from '../interfaces/product';
import { Httpmethodsservices } from '../services/httpmethodsservices';
//import { IProductDelete } from '../interfaces/Iproductdetails';

@Component({
  selector: 'app-update-producthttpmethod',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-producthttpmethod.html',
  styleUrls: ['./update-producthttpmethod.css'],
})
export class UpdateProducthttpmethod {

    searchText: string = '';
  //product: any = null;
  isLoading = false;
  errorMessage = '';
  isProductUpdated = false;
  message: string = '';
  alertType: 'success' | 'error' | 'info' | '' = '';

  // initialize product with empty values to avoid undefined in template
  product = {
    id: 0,
    title: '',
    description: '',
    category: '',
  };
  products: ProductItem[] = [];
  constructor(private httpmethodsservices: Httpmethodsservices) { }


  SearchProduct(): void {
    this.httpmethodsservices.searchProduct(this.searchText).subscribe(
      (productDetails: any) => {
        console.log("Product Data Received");
        this.products = productDetails.products[0] || productDetails; //  Array of Object (ProductItem) ProductItem[]
        this.product = this.products[0] || this.product; // Get the first product from the array or use the initialized product
        this.product.id = productDetails.products[0].id || 0; // Ensure id is a number
        this.product.title = productDetails.products[0].title || ''; // Ensure title is a string
        this.product.description = productDetails.products[0].description || ''; // Ensure description is a string
        this.product.category = productDetails.products[0].category || ''; // Ensure category is a string
        console.log(this.products);
      },
      (error) => {
        console.error("Error fetching product data:", error);


      });
  }

    updateProductDetails(updatedProductForm: NgForm): void {

      if (updatedProductForm.valid){
          console.log("Updating product with ID:", this.product.id);
            this.httpmethodsservices.updateProductDetails(this.product.id, updatedProductForm.value).subscribe(
                (response: ProductItem | null) => {
                  console.log("Product updated successfully:", response);
                  this.message = "Product updated  successfully.";
                  this.isProductUpdated = true;
                  this.alertType = "success";
                  this.message = "Success!:-Product details have been updated  successfully. Product ID:= " + response?.id + " and product Title:= " + response?.title;
                },
                (error) => {
                  console.error("Error updating product:", error);
                  this.message = "Error updating product.";
                  this.alertType = "error";
                }
            );

      }

  }

}
