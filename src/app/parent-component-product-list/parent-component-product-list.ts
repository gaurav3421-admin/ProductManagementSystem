import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponentProductCard } from '../child-component-product-card/child-component-product-card';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-parent-component-product-list',
  imports: [ChildComponentProductCard, CommonModule],
  templateUrl: './parent-component-product-list.html',
  styleUrl: './parent-component-product-list.css',
})
export class ParentComponentProductList {

  // Object Array
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'},
    { id: 2, name: 'Smartphone', price: 499, imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'},
    { id: 3, name: 'Headphones', price: 199, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'}
  ];

  

}
