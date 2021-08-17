import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as category from './categories.reducers';

export interface RootReducerState {
    category:category.CategoryReducerState; 
}

export const rootReducer : ActionReducerMap<RootReducerState> = {
    category:category.CategoryReducer
};


export const getCategoryState = (state:RootReducerState) => state.category;
export const getCategoryLoaded = createSelector(getCategoryState, category.getLoaded);
export const getCategoryLoading = createSelector(getCategoryState, category.getLoading);
export const getCategory = createSelector(getCategoryState, category.getCategory);