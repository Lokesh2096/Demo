import { Action } from '../action';
import { CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS } from '../action/categories.action';


export interface Category {
    params:any; //categoryid
    data:any; //data
}


export interface CategoryReducerState{
    loading:boolean;
    loaded:boolean;
    category:Category[];
}

const initialState: CategoryReducerState = {
    loading:false,
    loaded:false,
    category:[]
};

export function CategoryReducer(state = initialState,action:Action){
    switch (action.type){
        case CATEGORY_LIST_REQUEST:{
            return {...state,loading:true}
        }
        case CATEGORY_LIST_SUCCESS:{ // {params:id,data:data}
            const data = state.category.concat(action.payload.data,);
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