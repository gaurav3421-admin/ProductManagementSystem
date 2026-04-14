import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { ProductItem } from '../interfaces/product';
import { Httpmethodsservices } from '../services/httpmethodsservices';
import { IProductDelete } from '../interfaces/Iproductdetails';

@Component({
  selector: 'app-delete-producthttpmethod',
  imports: [CommonModule,FormsModule],
  templateUrl: './delete-producthttpmethod.html',
  styleUrls: ['./delete-producthttpmethod.css'],
})
export class DeleteProducthttpmethod {

  searchText: string = '';
  //product: any = null;
  isLoading = false;
  errorMessage = '';
  isProductDeleted = false;
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

    deleteProductDetails(deleteProductForm: NgForm): void {

      if (deleteProductForm.valid){
          console.log("Deleting product with ID:", this.product.id);
            this.httpmethodsservices.deleteProductDetails(this.product.id).subscribe(
                (response: IProductDelete | null) => {
                  console.log("Product deleted successfully:", response);
                  this.message = "Product deleted successfully.";
                  this.isProductDeleted = true;
                  this.alertType = "success";
                  this.message = "Success!:-Product details have been deleted successfully. Product ID:= " + response?.id + " and product Title:= " + response?.title + " and isDeleted := " + response?.isDeleted + " and deletedOn := " + response?.deletedOn;
                },
                (error) => {
                  console.error("Error deleting product:", error);
                  this.message = "Error deleting product.";
                  this.alertType = "error";
                }
            );

      }

  }
}
