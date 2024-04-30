import {createReducer, on} from '@ngrx/store';
import * as ProductsAction from './products.actions';

export interface IProduct {
  // определите свои свойства состояния здесь
  id: number;
  name: string;
  cost: number;
  description: string;
  image: string;
}

export interface IActiveProducts {
  activeList: IProduct[];
  selected: boolean;
}

export interface Products {
 product1: IProduct[];
 product2: IProduct[];
 product: IActiveProducts;
}

export const initialState: Products = {
  product: { activeList: [], selected: false },

    product1: [
      { id: 1, name: 'Table', cost: 12, description: 'description1', image: 'assets/img/1.jpg'},
      { id: 2, name: 'Chair', cost: 12, description: 'description2', image: 'assets/img/2.jpg'},
      { id: 3, name: 'prod3', cost: 12, description: 'description3', image: 'assets/img/1.jpg'},
      { id: 4, name: 'prod4', cost: 12, description: 'description4', image: 'assets/img/1.jpg'},
    ],

    product2: [
      { id: 1, name: 'Table', cost: 12, description: 'description1', image: 'assets/img/1.jpg'},
      { id: 2, name: 'Chair', cost: 12, description: 'description2', image: 'assets/img/2.jpg'},
      { id: 3, name: 'prod3', cost: 12, description: 'description3', image: 'assets/img/1.jpg'},
      { id: 4, name: 'prod4', cost: 12, description: 'description4', image: 'assets/img/1.jpg'},
    ]
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsAction.setProductsList, (state, { productList }) => {
    const activeList = state[productList];
    return { ...state, product: { activeList, selected: true } };
  })

//   on(ProductsAction.setProductsList, (state, {newTargetsList}) => ({ ...state, targetsList: newTargetsList })
);
