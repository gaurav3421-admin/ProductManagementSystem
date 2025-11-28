import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { AgGridAngular,AgGridModule } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-aggridexample',
  imports: [AgGridAngular,AgGridModule,CommonModule],
  templateUrl: './aggridexample.html',
  styleUrl: './aggridexample.css',
  standalone: true,
})
export class Aggridexample {
  //isBrowser = typeof window !== 'undefined';
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
// Row Data: The data to be displayed.
    rowData = [
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false }
    ];

    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef[] = [
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ];
}
