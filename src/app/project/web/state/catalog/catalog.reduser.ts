import { createReducer } from '@ngrx/store';

export interface IProduct {
  link: string;
  name: string;
}

export interface Catalog {
 product: IProduct[];
}

export const initialState: Catalog = {
  product: [
    { link: '1', name: 'category1'},
    { link: '2', name: 'category2'},
    { link: '3', name: 'category3'},
    { link: '4', name: 'category4'},
  ]

};

export const catalogReducer = createReducer(
  initialState,
);