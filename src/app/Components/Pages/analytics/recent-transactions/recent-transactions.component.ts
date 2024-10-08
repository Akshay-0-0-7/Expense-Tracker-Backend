import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css'] // Corrected to 'styleUrls'
})
export class RecentTransactionsComponent {
  
  // Sample data for recent expenses
  recentExpenses = [
    { date: new Date('2024-10-01'), category: 'Groceries', amount: 50 },
    { date: new Date('2024-10-02'), category: 'Utilities', amount: 75 },
    { date: new Date('2024-10-03'), category: 'Rent', amount: 1200 },
    { date: new Date('2024-10-04'), category: 'Transportation', amount: 20 }
  ];

  // Sample data for recent incomes
  recentIncomes = [
    { date: new Date('2024-10-05'), category: 'Salary', amount: 3000 },
    { date: new Date('2024-10-06'), category: 'Freelance Work', amount: 500 },
    { date: new Date('2024-10-07'), category: 'Investment Returns', amount: 200 }
  ];

  showExpenses = true; // Toggle state for recent transactions

  toggleTransactions(view: 'income' | 'expense'): void {
    this.showExpenses = view === 'expense';
  }
}