import { FilterType } from "../types/FilterType";
import { PriorityTypes } from "../types/PriorityTypes";

export function getCategoryByType (type: FilterType) {
    switch(type){
        case FilterType.MUG:
            return 'mugs'
            break;

        case FilterType.SHIRT:
                return 't-shirts'
                break;

        default: return ``
            
    }
}

export function getFieldByPriority (priority: PriorityTypes) {
    switch(priority){
        case PriorityTypes.NEWS:
            return { field: 'created_at', sort: 'ASC'}
            break;

        case PriorityTypes.MAJOR_PRICE:
                return {field: 'price_in_cents', order: "ASC"}
                break;

                case PriorityTypes.MINOR_PRICE:
                    return {field: 'price_in_cents', order: "DSC"}
                    break;

        default: return {fiel: 'sales', order: 'ASC'}
            
    }
}

export const createQuery = (type: FilterType, priority: PriorityTypes) =>{
    if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY){
        return `query {
            allProducts(sortField: "sales", sortOrder: "DSC") {
            id
            name
            price_in_cents
            image_url
            }
          }
        `
    } else {
        const sortSettings = getFieldByPriority(priority)
        const categoryFilter = getCategoryByType(type)
        return `query {
            allProducts(filter: { category: "${categoryFilter}"}, sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}") { 
            id
            name
            price_in_cents
            image_url
            category
            }
          }
        `
    }
}
