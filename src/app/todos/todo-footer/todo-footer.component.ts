import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import* as filterActions from 'src/app/filtro/filtro.actions';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit{

  filtroActual: filterActions.filtrosValidos = "todos"

  filtros: filterActions.filtrosValidos[] = ['todos','completados','pendientes']

  pendientes: number = 0

  constructor(private store:Store<AppState>){}
  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro
      this.pendientes = state.todos.filter(todo => !todo.completado ).length
    })
  }

  cambiarFiltro(filtro: filterActions.filtrosValidos){
    this.store.dispatch(filterActions.setFiltro({filtro: filtro}))
  }

  onClearCompleted(){
    this.store.dispatch(todoActions.clearAllCompleted())
  }
}
