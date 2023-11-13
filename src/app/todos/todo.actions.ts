import { createAction, props } from "@ngrx/store";

export const crear = createAction('[TODO Component] Crear todo', props<{texto: string}>());
