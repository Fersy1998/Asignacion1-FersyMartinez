//import { products } from '../data/products';
import { types } from '../types/types';



const initialState = {
    activeProduct: null
};


export const productReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        
        case types.productSetActive:
            return {
                ...state,
                activeProduct: {...action.payload}
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
            return {
                ...state,
                products:state.products.filter(product=>
                    (product.id ===action.payload.id) 
                    ? (
                    /*product.comments.push(action.payload.comment),
                        product.rate.push(action.payload.calification),
                        product.users.push(action.payload.uid)*/
                    /*{
                        ...product,
                        rate:[...product.rate, action.payload.calification],
                        users: [...product.users, action.payload.uid]
                    
                    }*/
                    product.rate=[...product.rate, action.payload.calification],
                    product.users=[...product.users,action.payload.uid]
                    )
                    //? {...product, comments: product.comments.push(action.payload.comment) }
                    //? JSON.parse(localStorage.getItem('active'))
                    : product),
                activeProduct:{
                    ...state.activeProduct, 
                    rate: [...state.activeProduct.rate, action.payload.calification], 
                    users: [...state.activeProduct.users, action.payload.uid]}
            }
       /* case types.commentAddNew:
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
            }*/
        case types.commentAddNew:
                console.log('mi comentario en el reducer x', action.payload.comment);
                return {
                    ...state,
                    products:state.products.filter(product=>
                        (product.id ===action.payload.id) 
                        ? (
                        //Esto me actualiza el redux pero con error de mutation state
                        /*
                        product.comments.push(action.payload.comment),
                        product.rate.push(action.payload.calification),
                        product.users.push(action.payload.uid)
                            */
                            
                            
                            //Esto no me actualiza el Redux
                        {
                            ...product,
                            comments: [action.payload.comment, ...product.comments],
                            rate:[...product.rate, action.payload.calification],
                            users: [...product.users, action.payload.uid]
                        
                        }
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
                    ? {...action.payload.product}
                    :product
                )
            }
        case types.productLoaded:
            return {...state,
                    products:[...action.payload]
            }
        case types.productFiltered:
            return {
                ...state,
                filteredProducts: [...action.payload]
            }
        default:
            return {...state};
    }


}
