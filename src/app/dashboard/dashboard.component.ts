import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  imports: [ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  
  gastosData: any;
  chartOptions: any;

  ngOnInit() {
    const dados = localStorage.getItem('gastos');
    let gastos: { tipo: string; valor: number }[] = [];

    if (dados) {
      try {
        gastos = JSON.parse(dados);
      } catch (e) {
        console.warn('Erro ao ler gastos do localStorage', e);
      }
    }

    const totais: { [categoria: string]: number } = {};

    for (const gasto of gastos) {
      if (!totais[gasto.tipo]) {
        totais[gasto.tipo] = 0;
      }
      totais[gasto.tipo] += gasto.valor;
    }

    const labels = Object.keys(totais);
    const valores = Object.values(totais);

    this.gastosData = {
      labels,
      datasets: [
        {
          data: valores,
          backgroundColor: [
            '#42A5F5',
            '#66BB6A',
            '#FFA726',
            '#FF6384',
            '#AB47BC',
            '#26C6DA'
          ]
        }
      ]
    };

    this.chartOptions = {
      responsive: false,
      maintainResAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    };
  }
}
