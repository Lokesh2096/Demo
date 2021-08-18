import { Category } from "../reducer/categories.reducers";

export const CATEGORY_LIST_REQUEST = 'category list request'; // request send ki hai
export const CATEGORY_LIST_SUCCESS = 'category list success'; // request response success
export const CATEGORY_LIST_FAILED = 'category list failed'; // request send ki hai but failed


export class CategoryListRequestAction{
    readonly type = CATEGORY_LIST_REQUEST;
}

export class CategoryListSuccessAction{
    readonly type = CATEGORY_LIST_SUCCESS;
    // if an api gets success then we get response which we have to send as payload
    constructor(public payload?:{data:Category}){

    }
}

export class CategoryListFailedAction{
    readonly type = CATEGORY_LIST_FAILED;
}