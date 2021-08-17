import { Action } from '../action';
import { CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from '../action/categories.action';



export interface CategoryReducerState{
    loading:boolean;
    loaded:boolean;
    category:any;
}

const initialState: CategoryReducerState = {
    loading:false,
    loaded:false,
    category:null
};

export function CategoryReducer(state = initialState,action:Action){
    switch (action.type){
        case CATEGORY_LIST_REQUEST:{
            return {...state,loading:true}
        }
        case CATEGORY_LIST_SUCCESS:{
            const data = action.payload.data;
            return {...state,loading:false,loaded:true,category:data}
        }
        default: {
            return state;
        }
    }
}


export const getLoading = (state:CategoryReducerState) => state.loading;
export const getLoaded = (state:CategoryReducerState) => state.loaded;
export const getCategory = (state:CategoryReducerState) => state.category;