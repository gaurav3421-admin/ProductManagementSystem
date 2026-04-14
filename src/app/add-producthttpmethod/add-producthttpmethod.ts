import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { ProductItem } from '../interfaces/product';
import { Httpmethodsservices } from '../services/httpmethodsservices';

@Component({
  selector: 'app-add-producthttpmethod',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-producthttpmethod.html',
  styleUrls: ['./add-producthttpmethod.css'],
})

export class AddProducthttpmethod {

  isProductAdded = false;
  message: string = '';
  alertType: 'success' | 'error' | 'info' | '' = '';

  product: ProductItem = {
    id: 0,
    title: '',
    description: '',
    category: '',
    image: '',
    price: 0,
    rating: { rate: 0, count: 0 }
  };
  constructor(private _httpmethodsservices: Httpmethodsservices) { }


  addProductDetails(productForm: NgForm): void {

    if (productForm.valid) {
      console.log(" called addProductDetails() method");
      const productData: ProductItem = <ProductItem>productForm.value;
      this._httpmethodsservices.addProductDetails(productData).subscribe(
        (response) => {
          console.log('Product added successfully:', response);
          this.isProductAdded = true;
          this.alertType = 'success';
          this.message = "Success!:-Product details have been added successfully. Product ID: " + response.id + "and product Title: " + response.title;
          //productForm.reset();
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
    }

  }

}
