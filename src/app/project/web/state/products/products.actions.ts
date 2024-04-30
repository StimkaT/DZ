import { createAction, props } from '@ngrx/store';

export const setProductsList = createAction(
  '[Product] setProductsList',
  props<{ productList: number }>()
);
