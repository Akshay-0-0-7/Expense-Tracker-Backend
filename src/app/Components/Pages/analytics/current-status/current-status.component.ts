import { Component } from '@angular/core';

@Component({
  selector: 'app-current-status',
  templateUrl: './current-status.component.html',
  styleUrls: ['./current-status.component.css'] // Corrected to 'styleUrls'
})
export class CurrentStatusComponent {
  viewType: 'monthly' | 'daily' = 'monthly'; // Default view type

  // Sample data for demonstration
  income = 5000;
  expenses = 3000;
  balance = this.income - this.expenses;
  transactions = 25;

  toggleView(view: 'monthly' | 'daily') {
    this.viewType = view;
    // Additional logic can be added here if needed
  }
}