import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BusinessMetrics } from '../interfaces/product'

// decorator to make this service available throughout the application
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

  getStateList(): any {
    const states = [
      { id: '1', name: 'California', shortName: 'CA' },
      { id: '2', name: 'Texas', shortName: 'TX' },
      { id: '3', name: 'New York', shortName: 'NY' },
      { id: '4', name: 'Florida', shortName: 'FL' }
    ];
    return of(states);
  }

  getCountryList(): any {
    const countries = [
      { id: '1', name: 'United States', shortName: 'US' },
      { id: '2', name: 'Canada', shortName: 'CA' },
      { id: '3', name: 'United Kingdom', shortName: 'UK' },
      { id: '4', name: 'Australia', shortName: 'AU' }
    ];
    return of(countries);
  }

  getSemesterList(): any {
    const semesters = [
      { id: '1', name: '1st Semester' },
      { id: '2', name: '2nd Semester' },
      { id: '3', name: '3rd Semester' },
      { id: '4', name: '4th Semester' },
      { id: '5', name: '5th Semester' },
      { id: '6', name: '6th Semester' },
      { id: '7', name: '7th Semester' },
      { id: '8', name: '8th Semester' }
    ];
    return of(semesters);
  }


}
