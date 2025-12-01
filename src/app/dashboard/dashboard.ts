import { Component } from '@angular/core';
import { ProductDetails } from '../product-details/product-details'
import { GetProductDetails } from "../get-product-details/get-product-details"
import { DashboardProductSummary } from '../dashboard-product-summary/dashboard-product-summary'

@Component({
  selector: 'app-dashboard',
  imports: [DashboardProductSummary,GetProductDetails],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
