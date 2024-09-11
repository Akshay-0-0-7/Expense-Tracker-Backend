import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() sideNavStatus: boolean = false;

  list=[
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-home',
      route: 'home'
    },
    {
      number: '2',
      name: 'Transactions',
      icon: 'fa-solid fa-sack-dollar',
      route: 'transactions'
    },
    {
      number: '3',
      name: 'Analytics',
      icon: 'fa-solid fa-chart-area',
      route: 'analytics'
    },
    {
      number: '3',
      name: 'Accounts',
      icon: 'fa-solid fa-file-invoice-dollar',
      route: 'accounts'
    },
    {
      number: '4',
      name: 'Learning',
      icon: 'fa-solid fa-lines-leaning',
      route: 'learning'
    },
    {
      number: '5',
      name: 'Stocks',
      icon: 'fa-solid fa-arrow-trend-up',
      route: 'stocks'
    },
    {
      number: '6',
      name: 'About Us',
      icon: 'fa-solid fa-envelope',
      route: 'about-us'
    }
  ]
}
