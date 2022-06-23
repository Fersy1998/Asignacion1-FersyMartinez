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
        rate:[4,5],
        users:['32413', '324513'],
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
        
        case types.calificationAddNew:
                return {
                    ...state,
                    products:state.products.filter(product=>(product.id ===action.payload.id) ? (product.rate.push(action.payload.calification), product.users.push(action.payload.uid)): product),
                    activeProduct:{
                        ...state.activeProduct, 
                        rate: [...state.activeProduct.rate, action.payload.calification], 
                        users: [...state.activeProduct.users, action.payload.uid]
                }
            }
        case types.commentAddNew:
            return {
                ...state,
                products:state.products.filter(product=>(product.id ===action.payload.id) ? product.comments.push(action.payload.comment): product),
                activeProduct:{
                    ...state.activeProduct, 
                    comments: [...state.activeProduct.comments, action.payload.comment]}
            }

        default:
            return state;
    }


}
