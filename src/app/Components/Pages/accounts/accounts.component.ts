import { Component } from '@angular/core';
import { Account } from '../../../Models/Account';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  // List of accounts
  accounts: Account[] = [
    { bankName: 'Bank A', accountNumber: '123456789', balance: 25000 },
    { bankName: 'Bank B', accountNumber: '987654321', balance: 15000 },
    { bankName: 'Bank D', accountNumber: '638243924', balance: 5000 },
    { bankName: 'Bank B', accountNumber: '973439244', balance: 7000 },
  ];

  // New account object
  newAccount: Account = { bankName: '', accountNumber: '', balance: 0 };

  // For updating an existing account
  selectedAccount: Account = { bankName: '', accountNumber: '', balance: 0 };
  selectedIndex: number | null = null;

  // Add a new account
  addAccount() {
    this.accounts.push({ ...this.newAccount });
    this.newAccount = { bankName: '', accountNumber: '', balance: 0 };
  }

  // Open the update modal and set the selected account
  openUpdateModal(index: number) {
    this.selectedIndex = index;
    this.selectedAccount = { ...this.accounts[index] };
  }

  // Update the selected account
  updateAccount() {
    if (this.selectedIndex !== null && this.selectedAccount) {
      this.accounts[this.selectedIndex] = { ...this.selectedAccount };
      this.selectedAccount = { bankName: '', accountNumber: '', balance: 0 };;
      this.selectedIndex = null;
    }
  }

  // Delete an account
  deleteAccount(index: number) {
    this.accounts.splice(index, 1);
  }
}
