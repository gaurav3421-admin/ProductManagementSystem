import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-child-component-product-card',
  imports: [CommonModule],
  templateUrl: './child-component-product-card.html',
  styleUrl: './child-component-product-card.css',
})

export class ChildComponentProductCard {
  // Use 'required: true' to ensure the parent always sends data
  //@Input({ required: true }) product!: Product; 
  @Input() product!: Product;

  
}
