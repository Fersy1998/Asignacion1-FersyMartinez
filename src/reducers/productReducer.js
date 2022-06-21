import { types } from '../types/types';

const products=[
    {
        id:'232415345646',
        name:'Mini Little Hypo',
        logo:'/assets/productos/71KfdpD2qCL._AC_SL1500_.jpg',
        banner:'/assets/productos/banner imagen 1.jpg',
        description:'This is a product that helps the kids to sleep and wake up early',
        tags:['niños', 'alarma', 'entretenimiento'],
        date:'12/12/2022',
        rate:[4,5,3, 5, 2, 0, 0],
        author:'José Barahona',
        photo:'/assets/productos/404-4041138_circle-group-icon-png-clipart.png',
        category:'entertainment',
        comments:[
            {
                comment:'Good product',
                author:'Georgia Ramírez',
                date:'14/12/2022',
                photo:'/assets/productos/404-4041138_circle-group-icon-png-clipart.png'
            }
        ]
    }]

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
        
        case types.ProductAddNew:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }
    
        case types.productClearActiveproduct:
            return {
                ...state,
                activeProduct: null
            }

        case types.productLoaded:
            return {
                ...state,
                products: [ ...action.payload ]
            }

        case types.productLogout:
            return {
                ...initialState
            }

        default:
            return state;
    }


}
