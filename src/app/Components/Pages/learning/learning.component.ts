import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class LearningComponent {
  resources = [
    {
      title: 'Zerodha Varsity',
      description: 'Comprehensive guide on stock markets and trading, suitable for beginners and professionals.',
      link: 'https://zerodha.com/varsity/',
      imageUrl: '/assets/zerodha-varsity.png'
    },
    {
      title: 'Udemy: The Complete Financial Analyst Course 2023',
      description: 'A complete guide to become a financial analyst and learn key concepts in finance and analysis.',
      link: 'https://www.udemy.com/course/the-complete-financial-analyst-course/',
      imageUrl: 'assets/Udemy-1.jpg'
    },
    {
      title: 'Udemy: Stock Market Trading for Beginners',
      description: 'This Udemy course is a perfect starting point to learn about stock market trading.',
      link: 'https://www.udemy.com/course/stock-market-trading/',
      imageUrl: 'assets/Udemy-2.jfif'
    },
    {
      title: 'YouTube: Finance Management 101 Playlist',
      description: 'A comprehensive playlist on YouTube covering the basics of personal finance management.',
      link: 'https://www.youtube.com/playlist?list=PLzWJjr_NkWWofkUHwMeY5x3o-Tfg_ezDn',
      imageUrl: 'assets/Youtube-1.jpg'
    },
    {
      title: 'YouTube: Stock Market for Beginners Playlist',
      description: 'Learn about stock markets with this engaging YouTube playlist for beginners.',
      link: 'https://www.youtube.com/playlist?list=PLzWJjr_NkWWpJZyA11xq6ULv-yKcVbp7x',
      imageUrl: 'assets/Youtube-2.jfif'
    }
  ];
}
