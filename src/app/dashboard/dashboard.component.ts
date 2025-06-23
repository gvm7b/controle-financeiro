import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  imports: [ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  gastosData = {
    labels: ['Alimentação', 'Transporte', 'Educação', 'Lazer', 'Outros'],
    datasets: [
      {
        data: [500, 200, 300, 150, 100],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FF6384', '#AB47BC'],
      },
    ],
  };

  chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
}
