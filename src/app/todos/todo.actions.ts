import { createAction, props } from "@ngrx/store";

export const crear = createAction('[TODO Component] Crear Todo', props<{texto: string}>());
export const toggle = createAction('[TODO Component] Toggle Todo', props<{id: number}>());
