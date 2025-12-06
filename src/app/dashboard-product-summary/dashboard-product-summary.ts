import { Component, OnInit } from '@angular/core';
import { Commonservice } from '../services/commonservice'; /// Step 1 : Import the service
import { Observable } from 'rxjs';
import { BusinessMetrics } from '../interfaces/product';
import { AsyncPipe, CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-product-summary',
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './dashboard-product-summary.html',
  styleUrl: './dashboard-product-summary.css',
})
export class DashboardProductSummary implements OnInit {

  metrics$!: Observable<BusinessMetrics>;
  metrics: BusinessMetrics | null = null;

  // Inject the AnalyticsService
  constructor(private _commonService: Commonservice) { }


  ngOnInit(): void {
    // Call the service method and assign the Observable to metrics$
    this.metrics$ = this._commonService.getMetrics();
    this.metrics$.subscribe(
      (data) => {
        // Handle the next data value emitted by the Observable
        console.log('Metrics data received:', data);
        // Store the data in a component property for display (not the Observable)
        this.metrics = data;
        console.log('Data Response',data);
        
      },
      (error) => {
        // Handle any errors that occurred during the request
        console.error('Error fetching metrics:', error);
      },
      () => {
        // Handle the completion of the Observable (optional)
        console.log('Metrics stream completed.');
      }
    );



  }

}

