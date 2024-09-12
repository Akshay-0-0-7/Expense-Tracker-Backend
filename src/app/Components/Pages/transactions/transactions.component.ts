import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { Transaction } from '../../../Models/Transaction';
import { Category } from '../../../Models/Category';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class TransactionsComponent {
  todayDate: string = new Date().toISOString().split('T')[0];

  // Separate arrays for income and expense categories
  incomeCategories: Category[] = [
    { id: 1, name: 'Salary' },
    { id: 2, name: 'Investment' },
    { id: 3, name: 'Freelance' },
  ];

  expenseCategories: Category[] = [
    { id: 1, name: 'Food' },
    { id: 2, name: 'Entertainment' },
    { id: 3, name: 'Transportation' },
    { id: 4, name: 'Utilities' },
    { id: 5, name: 'Shopping' },
    { id: 6, name: 'Others' }
  ];

  transactions: Transaction[] = [];
  newCategory: string = '';
  showModal: boolean = false;
  transactionForm: FormGroup;
  isIncomeSelected: boolean = false;

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      date: [this.todayDate, Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      category: [null, Validators.required],
      type: [null, Validators.required],
      note: [null, Validators.required]
    });
  }

  // Update the isIncomeSelected based on the selected type
  onTypeChange() {
    this.isIncomeSelected = this.transactionForm.get('type')?.value === 'Income';
  }

  addTransaction() {
    if (this.transactionForm.valid) {
      // Create a new transaction object from the form values
      const newTransaction: Transaction = {
        date: this.transactionForm.value.date,
        amount: this.transactionForm.value.amount,
        category: this.transactionForm.value.category,
        type: this.transactionForm.value.type,
        note: this.transactionForm.value.note
      };

      // Push the new transaction into the transactions array
      this.transactions.push(newTransaction);

      // Reset the form
      this.transactionForm.reset({ date: this.todayDate });
      this.transactionForm.get('category')?.setValue(null);
      this.transactionForm.get('type')?.setValue(null);
      this.transactionForm.get('note')?.setValue(null);
    }
  }

  addCategory() {
    if (this.newCategory) {
      const newCategory: Category = { id: this.getNextCategoryId(), name: this.newCategory };
      if (this.isIncomeSelected) {
        this.incomeCategories.push(newCategory);
      } else {
        this.expenseCategories.push(newCategory);
      }
      this.newCategory = '';
      this.showModal = false;
    }
  }

  // Helper function to get the next category ID
  private getNextCategoryId(): number {
    return this.isIncomeSelected ? this.incomeCategories.length + 1 : this.expenseCategories.length + 1;
  }
}