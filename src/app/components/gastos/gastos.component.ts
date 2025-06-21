import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gastos',
  imports: [FormsModule],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {

  descricao: string = '';
  valor: number | null = null;

  gastos = signal<{ descricao: string; valor: number }[]>([]);

  adicionarGasto() {
    if (!this.descricao || this.valor === null) return;

    this.gastos.update(gastos => [
      ...gastos,
      { descricao: this.descricao, valor: this.valor! }
    ]);

    this.descricao = '';
    this.valor = null;
  }

  removerGasto(index: number) {
    this.gastos.update(gastos => gastos.filter((_, i) => i !== index));
  }
}
