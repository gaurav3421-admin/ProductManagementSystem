import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms

@Component({
  selector: 'app-searchproduct',
  imports: [FormsModule, CommonModule],
  templateUrl: './searchproduct.html',
  styleUrl: './searchproduct.css',
})
export class Searchproduct {
  searchText: string = '';
  product: any = null;
  isLoading = false;
  errorMessage = '';


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


}
