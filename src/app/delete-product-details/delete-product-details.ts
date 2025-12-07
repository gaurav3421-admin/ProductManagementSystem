import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { Productdummyservice } from '../services/productdummyservice';

@Component({
  selector: 'app-delete-product-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './delete-product-details.html',
  styleUrl: './delete-product-details.css',
})
export class DeleteProductDetails {

  searchText: string = '';
  //product: any = null;
  isLoading = false;
  errorMessage = '';
  isProductAdded = false;
  message: string = '';
  alertType: 'success' | 'error' | 'info' | '' = '';
  product: any = {
    id: null,
    title: '',
    brand: '',
    description: '',
    category: '',
    sku: '',
    availabilityStatus: '',
    returnPolicy: '',
    minimumOrderQuantity: null,
    price: null,
    discountPercentage: null,
    rating: null,
    stock: null,
    tags: '', // template expects a comma-separated string
    weight: null,
    dimensions: {
      width: null,
      height: null,
      depth: null
    },
    warrantyInformation: '',
    shippingInformation: '',
    meta: {
      createdAt: '',
      updatedAt: '',
      barcode: ''
    },
    thumbnail: '',
    images: []
  };



  // Consructor
  constructor(private _productdummyservice: Productdummyservice) { };

  SearchProduct() {
    console.log('Searching for product:', this.searchText);
    if (!this.searchText.trim()) {
      this.errorMessage = 'Please enter product name!';
      this.product = null;
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    fetch(`https://dummyjson.com/products/search?q=${this.searchText}`)
      .then(res => res.json())
      .then(data => {
        this.isLoading = false;

        if (data.products.length > 0) {
          this.product = data.products[0];   // Show first match
        } else {
          this.errorMessage = 'No products found!';
          this.product = null;
        }
      })
      .catch(() => {
        this.isLoading = false;
        this.errorMessage = 'Error fetching product!';
      });
  }

  //Method to handle form submission
  deleteProductDetails(updateProductForm: NgForm) {
    if (updateProductForm.valid) {
      //console.log('Searching for product:', this.searchText);
      //console.log("Called updateProductDetails() method");
      console.log("Method=>deleteProductDetails()=> Product Id=" + this.searchText);
      var _productID: number = Number(this.searchText);
      this._productdummyservice.deleteProduct(_productID ).subscribe(
        (response) => {
          console.log("Product deleted successfully:", response);
          //this.id = true;
          //alert("Product added successfully");
          this.isProductAdded = true;
          this.alertType = 'success';
          this.message = "Success!:-Product details have been deleted successfully. Product ID:= " + response.id + " and product Title:= " + response.title + "and isDeleted := " + response.isDeleted + "and deletedOn := " + response.deletedOn;
          //addProductForm.reset(); // Reset the form after successful submission
        },

        (error) => {
          this.isProductAdded = true;
          this.alertType = 'error';
          this.message = "Error!:-Product details have not updated successfully.";
          console.error("Error adding product:", error);
          //alert("Error adding product. Please try again.");
        }
      );
    } else {
      console.log("form is not valid");
    }


  }

}
