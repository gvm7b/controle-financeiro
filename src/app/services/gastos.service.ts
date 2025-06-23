import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export interface Gasto {
  tipo: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})

export class GastosService {
 private readonly STORAGE_KEY = 'gastos';
  private gastosSubject = new BehaviorSubject<Gasto[]>(this.carregarGastosDoLocalStorage());
  gastos$ = this.gastosSubject.asObservable();

  adicionarGasto(gasto: Gasto) {
    const atual = this.gastosSubject.value;
    const atualizado = [...atual, gasto];
    this.gastosSubject.next(atualizado);
    this.salvarNoLocalStorage(atualizado);
  }

  obterGastos(): Gasto[] {
    return this.gastosSubject.value;
  }

  private carregarGastosDoLocalStorage(): Gasto[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private salvarNoLocalStorage(gastos: Gasto[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(gastos));
  }
}

