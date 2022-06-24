
import { types } from '../types/types';
//import { fetchWithToken } from '../helpers/fetch';
//import { prepareProducts } from '../helpers/prepareProducts';

export const productSetActive = (product) => ({
    type: types.productSetActive,
    payload: product
});

export const productClearActiveproduct = () => ({ type: types.productClearActiveproduct });

export const productStartLoading = () => {
   /* return async(dispatch) => {

        try {
            
            const resp = await fetchWithToken( 'products' );
            const body = await resp.json();

            const products = prepareproducts( body.productos );
            dispatch( eventLoaded( Products ) );

        } catch (error) {
            console.log(error)
        }

    }*/
   // dispatch( productLoaded() );
}

export const productLoaded = (products) => ({
    type: types.productLoaded,
    payload: products
})

export const setFiltered = (products=[]) => ({
    type: types.productFiltered,
    payload: [...products]
})

export const productLogout =() => ({ type: types.productLogout });