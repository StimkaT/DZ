import { createReducer } from '@ngrx/store';

export interface ICatalog {
  link: string;
  name: string;
}

export interface Catalog {
 product: ICatalog[];
}

export const initialState: Catalog = {
  product: [
    { link: 'product1', name: 'category1'},
    { link: 'product2', name: 'category2'},
    { link: 'product3', name: 'category3'},
    { link: 'product4', name: 'category4'},
  ]

};

export const catalogReducer = createReducer(
  initialState,
);
