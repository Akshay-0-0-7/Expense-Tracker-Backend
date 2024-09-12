import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import { Transaction } from '../../../Models/Transaction';
import { Category } from '../../../Models/Category';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
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
  categories: Category[] = [
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

  constructor(private fb: FormBuilder) {
    this.transactionForm = this.fb.group({
      date: [this.todayDate, Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      category: [null, Validators.required],
      type: [null, Validators.required],
      note: [null, Validators.required]
    });
  }

  addTransaction() {
    if (this.transactionForm.valid) {
      this.transactions.push(this.transactionForm.value);
      this.transactionForm.reset({ date: this.todayDate });
      this.transactionForm.get('category')?.setValue(null);
      this.transactionForm.get('type')?.setValue(null);
      this.transactionForm.get('note')?.setValue(null);
    }
  }

  addCategory() {
    if (this.newCategory) {
      this.categories.push({ id: this.categories.length + 1, name: this.newCategory });
      this.newCategory = '';
      this.showModal = false;
    }
  }
}
