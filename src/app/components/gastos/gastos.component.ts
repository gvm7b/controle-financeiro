import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {SelectModule} from 'primeng/select'
import { InputNumberModule } from 'primeng/inputnumber';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  imports: [FormsModule, CommonModule, ButtonModule, SelectModule, InputNumberModule],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {


  tipoGasto = signal<string>(''); 
  valor = signal<number | null>(null); 
  motivo = signal<{ tipo: string; valor: number }[]>([]);  

  tiposDeGasto = signal([
    'Lazer',
    'Transporte',
    'Alimentação',
    'Cartão de Crédito',
    'Contas',
    'Outros'
  ]);


  constructor(private router: Router) {
    const dadosSalvos = localStorage.getItem('gastos');
    if (dadosSalvos) {
      try {
        this.motivo.set(JSON.parse(dadosSalvos));
      } catch (e) {
        console.warn('Erro ao carregar gastos do localStorage', e);
      }
    }
  
    effect(() => {
      localStorage.setItem('gastos', JSON.stringify(this.motivo()));
    });
  }

  adicionarGasto() {
    const tipo = this.tipoGasto();
    const valor = this.valor();


    if (!tipo || valor === null) return;
    this.motivo.update(motivo => [
      ...motivo,
      { tipo, valor }
  
    ]);

    this.tipoGasto.set('');
    this.valor.set(null);

    console.log('teste')
  }

  removerGasto(index: number) {
    this.motivo.update(motivo => motivo.filter((_, i) => i !== index));
  }

  
}


