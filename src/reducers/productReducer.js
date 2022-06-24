import { products } from '../data/products';
import { types } from '../types/types';



const initialState = {
    products: products,
    activeProduct: null
};


export const productReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.productSetActive:
            return {
                ...state,
                activeProduct: action.payload
            }
        
    
        case types.productClearActiveproduct:
            return {
                ...state,
                activeProduct: null
            }

        case types.productLogout:
            return {
                ...initialState
            }
        
        case types.calificationAddNew:
            console.log('payload', action.payload)
            
            return {
                ...state,
                products:state.products.filter(product=>
                    (product.id ===action.payload.id) 
                    ? (product.rate.push(action.payload.calification), product.users.push(action.payload.uid))
                    : product),
                activeProduct:{
                    ...state.activeProduct, 
                    rate: [...state.activeProduct.rate, action.payload.calification], 
                    users: [...state.activeProduct.users, action.payload.uid]
                }
            
            }
        case types.commentAddNew:
            console.log('mi comentario en el reducer', action.payload.comment);
            return {
                ...state,
                products:state.products.filter(product=>
                    (product.id ===action.payload.id) 
                    ? product.comments.push(action.payload.comment)
                    //? {...product, comments: product.comments.push(action.payload.comment) }
                    //? JSON.parse(localStorage.getItem('active'))
                    : product),
                activeProduct:{
                    ...state.activeProduct, 
                    comments: [...state.activeProduct.comments, action.payload.comment]}
            }
        case types.commentAddNewX:
                console.log('mi comentario en el reducer x', action.payload.comment);
                return {
                    ...state,
                    products:state.products.filter(product=>
                        (product.id ===action.payload.id) 
                        ? (product.comments.push(action.payload.comment),
                            product.rate.push(action.payload.calification),
                            product.users.push(action.payload.uid)
                        )
                        //? {...product, comments: product.comments.push(action.payload.comment) }
                        //? JSON.parse(localStorage.getItem('active'))
                        : product),
                    activeProduct:{
                        ...state.activeProduct, 
                        comments: [...state.activeProduct.comments, action.payload.comment],
                        rate: [...state.activeProduct.rate, action.payload.calification], 
                        users: [...state.activeProduct.users, action.payload.uid]}
                }
        case types.productRefresh:
            return {
                ...state,
                products:state.products.map(product=>
                    product.id===action.payload.id
                    ? action.payload.product
                    :product
                )
            }
        case types.productLoaded:
            return state
        case types.productFiltered:
            return {
                ...state,
                filtered: [...action.payload]
            }
        default:
            return state;
    }


}
