import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor
import { Productdummyservice } from '../services/productdummyservice';

@Component({
  selector: 'app-add-product-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product-details.html',
  styleUrl: './add-product-details.css',
})
export class AddProductDetails {

  isProductAdded = false;
  message: string = '';
  alertType: 'success' | 'error' | 'info' | '' = '';
  // Consructor
  constructor(private _productdummyservice: Productdummyservice) { };

  product = {
    title: '',
    description: '',
    category: '',
    price: null,
    discountPercentage: null,
    rating: null,
    stock: null,
    tags: '',
    brand: '',
    sku: '',
    weight: null,
    width: null,
    height: null,
    depth: null,
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    returnPolicy: '',
    minimumOrderQuantity: null
  };

  //Method to handle form submission
  addProductDetails(addProductForm: NgForm) {
    if (addProductForm.valid) {
      console.log(" called InsertemployeeDetails() method");
      console.log(addProductForm.value);
      
      this._productdummyservice.addNewProduct(addProductForm.value).subscribe(
        (response) => {
          console.log("Product added successfully:", response);
          //this.id = true;
          //alert("Product added successfully");
          this.isProductAdded = true;
          this.alertType= 'success';
          this.message = "Success!:-Product details have been added successfully. Product ID: " + response.id + "and product Title: " + response.title;
          addProductForm.reset(); // Reset the form after successful submission
        },

        (error) => {
          this.isProductAdded = true;
          this.alertType= 'error';
          this.message = "Error!:-Product details have not added successfully.";
          console.error("Error adding product:", error);
          //alert("Error adding product. Please try again.");
        }
      );
    } else {
      console.log("form is not valid");
    }


  }

}
