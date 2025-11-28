import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
// ... other necessary imports


@Component({
  selector: 'app-first-component',
  imports: [
    MatButtonModule, // Add to imports array
    MatCardModule,   // Add to imports array
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule

    // ... other imports
  ],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {

  _userName: string='Gaurav';

}
