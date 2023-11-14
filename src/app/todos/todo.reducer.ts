import { Action, createReducer, on } from '@ngrx/store';
import { crear, toggle } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a thano'),
  new Todo('Robar escudo del capitan america'),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]), //agrego un nuevo arreglo añadiento el nuevo dato al final del arreglo
  
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      }
      return todo;
    });
  })
);

export function todoReducer(state = initialState, action: Action) {
  return _todoReducer(state, action);
}
