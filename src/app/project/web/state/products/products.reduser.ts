import { createReducer } from '@ngrx/store';

export interface IProduct {
  // определите свои свойства состояния здесь
  id: number;
  name: string;
  cost: number;
  description: string;
  image: string;
}

export interface Products {
 product: IProduct[];
}

export const initialState: Products = {
  product: [
    { id: 1, name: 'Table', cost: 12, description: 'description1', image: 'assets/img/1.jpg'},
    { id: 2, name: 'Chair', cost: 12, description: 'description2', image: 'assets/img/2.jpg'},
    { id: 3, name: 'prod3', cost: 12, description: 'description3', image: 'assets/img/1.jpg'},
    { id: 4, name: 'prod4', cost: 12, description: 'description4', image: 'assets/img/1.jpg'},
  ]

};

export const yourReducer = createReducer(
  initialState,
);