import { Component,OnInit  } from '@angular/core';
import { Commonservice } from '../services/commonservice';
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
   // Inject the AnalyticsService
  constructor(private _commonService: Commonservice) { }

  ngOnInit(): void {
    // Call the service method and assign the Observable to metrics$
    this.metrics$ = this._commonService.getMetrics();
  }

}

