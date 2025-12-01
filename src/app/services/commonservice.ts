import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusinessMetrics } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class Commonservice {
  constructor() { }

  // Method to fetch the business metrics
  // In a real application, this would make an HTTP request to an API (e.g., using HttpClient)
  getMetrics(): Observable<BusinessMetrics> {
    // Mock data for demonstration purposes
    const mockData: BusinessMetrics = {
      totalProfit: 15430.50,
      totalOrders: 345,
      averagePrice: 44.72, // Calculated as Total Profit / Total Orders
      productsSold: 1280
    };
    // Use 'of()' to return the mock data as an Observable
    return of(mockData);
  }

}
