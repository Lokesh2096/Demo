export interface Orders{
    label:string;
    id:any;
    items:number;
    delivery_type:'COD' | 'Online' | 'BOTH';
    item_detail?:Item[];
}

export interface Item{
    name:string;
    id:string | number;
    quantity:number;
}