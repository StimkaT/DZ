import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Products } from './products.reduser';

export const selectFeature = createFeatureSelector<Products>('products');


export const getActiveProductsList = createSelector(
    selectFeature,
    (state: Products) => state.product
);

export const getProductsList2 = createSelector(
    selectFeature,
    (state: Products) => state.product2
);
