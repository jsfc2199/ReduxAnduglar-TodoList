import { createAction, props } from "@ngrx/store";

export const crear = createAction('[TODO Component] Crear Todo', props<{texto: string}>());
export const toggle = createAction('[TODO Component] Toggle Todo', props<{id: number}>());
export const editar = createAction('[TODO Component] Editar Todo', props<{id: number, texto: string}>());
export const borrar = createAction('[TODO Component] Eliminar Todo', props<{id: number}>());
export const toggleAll = createAction('[TODO Component] ToggleAll Todo', props<{completado: boolean}>());
export const clearAllCompleted = createAction('[TODO Component] CrealAll Completed');
