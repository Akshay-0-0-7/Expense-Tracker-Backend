import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  isMonthly = true; // Toggle state for monthly/daily view

  // Dummy data for monthly expenses
  monthlyData = {
    categories: [
      { name: 'Groceries', amount: 300 },
      { name: 'Utilities', amount: 150 },
      { name: 'Rent', amount: 1200 },
      { name: 'Transportation', amount: 100 },
      { name: 'Entertainment', amount: 200 },
      { name: 'Healthcare', amount: 250 },
      { name: 'Clothing', amount: 80 },
      { name: 'Miscellaneous', amount: 50 }
    ]
  };

  // Dummy data for daily expenses
  dailyData = {
    categories: [
      { name: 'Groceries', amount: 10 },
      { name: 'Utilities', amount: 5 },
      { name: 'Rent', amount: 40 }, // Daily rent calculated from monthly
      { name: 'Transportation', amount: 3 },
      { name: 'Entertainment', amount: 7 },
      { name: 'Healthcare', amount: 8 },
      { name: 'Clothing', amount: 2 },
      { name: 'Miscellaneous', amount: 1 }
    ]
  };

  chart!: Chart<'pie'>; // Declare chart variable with specific type

  ngOnInit() {
    Chart.register(...registerables); // Register all necessary components
    this.renderChart(); // Render initial chart
  }

  toggleView(viewType: string): void {
    this.isMonthly = viewType === 'monthly';
    this.renderChart(); // Re-render chart when view changes
  }

  get currentData() {
    return this.isMonthly ? this.monthlyData : this.dailyData;
  }

  renderChart() {
    const ctx = document.getElementById('expensePieChart') as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy(); // Destroy previous chart instance if it exists
    }

    this.chart = new Chart(ctx.getContext('2d') as CanvasRenderingContext2D, {
      type: 'pie',
      data: {
        labels: this.currentData.categories.map(category => category.name),
        datasets: [{
          label: 'Expenses',
          data: this.currentData.categories.map(category => category.amount),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF9F40',
            '#4BC0C0',
            '#9966FF',
            '#FF6384',
            '#36A2EB'
          ],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
    });
  }
}