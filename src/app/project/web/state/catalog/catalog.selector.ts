import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Catalog } from './catalog.reduser';

export const selectFeature = createFeatureSelector<Catalog>('catalog');

// export const selectFeature = createFeatureSelector<CommandsListState>(TRIPOD_COMMANDS_LIST_FEATURE_KEY);

export const getCatalog = createSelector(
    selectFeature,
    (state: Catalog) => state.product
);