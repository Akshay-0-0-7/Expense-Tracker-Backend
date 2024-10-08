import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart!: Chart<'bar'>; // Declare chart variable with specific type
  selectedMonth = new Date().getMonth(); // Current month
  selectedYear = new Date().getFullYear(); // Current year

  // Dummy data for daily expenses (for one month)
  dailyExpenses = [
    { date: '2024-10-01', amount: 50 },
    { date: '2024-10-02', amount: 75 },
    { date: '2024-10-03', amount: 100 },
    { date: '2024-10-04', amount: 20 },
    { date: '2024-10-05', amount: 150 },
    { date: '2024-10-06', amount: 80 },
    { date: '2024-10-07', amount: 200 },
    { date: '2024-10-08', amount: 90 },
    { date: '2024-10-09', amount: 60 },
    { date: '2024-10-10', amount: 120 },
    { date: '2024-10-11', amount: 30 },
    { date: '2024-10-12', amount: 50 },
    { date: '2024-10-13', amount: 75 },
    { date: '2024-10-14', amount: 100 },
    { date: '2024-10-15', amount: 20 },
    { date: '2024-10-16', amount: 150 },
    { date: '2024-10-17', amount: 80 },
    { date: '2024-10-18', amount: 200 },
    { date: '2024-10-19', amount: 90 },
    { date: '2024-10-20', amount: 60 },
    { date: '2024-10-21', amount: 120 },
    { date: '2024-10-22', amount: 30 },
    { date: '2024-10-23', amount: 50 },
    { date: '2024-10-24', amount: 75 },
    { date: '2024-10-25', amount: 100 },
    { date: '2024-10-26', amount: 20 },
    { date: '2024-10-27', amount: 150 },
    { date: '2024-10-28', amount: 80 },
    { date: '2024-10-29', amount: 200 },
    { date: '2024-10-30', amount: 90 },
    { date: '2024-10-31', amount: 60 }
  ];

  ngOnInit() {
    Chart.register(...registerables); // Register all necessary components
    this.renderChart(); // Render initial chart
  }

  renderChart() {
    const ctx = document.getElementById('dailyExpenseChart') as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy(); // Destroy previous chart instance if it exists
    }

    this.chart = new Chart(ctx.getContext('2d') as CanvasRenderingContext2D, {
      type:'bar',
      data:{
        labels:this.dailyExpenses.map(expense => expense.date),
        datasets:[{
          label:'Daily Expenses',
          data:this.dailyExpenses.map(expense => expense.amount),
          backgroundColor:'#36A2EB',
        }]
      },
      options:{
        responsive:true,
        scales:{
          y:{
            beginAtZero:true
          }
        }
      }
    });
  }

}