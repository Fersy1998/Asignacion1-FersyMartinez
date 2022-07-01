
import { types } from '../types/types';
//import { fetchWithToken } from '../helpers/fetch';
//import { prepareProducts } from '../helpers/prepareProducts';
//https://appland-e-commerce-ec53d.firebaseio.com
//const apiURL='https://appland-e-commerce-ec53d.firebaseio.com/app/api'
const apiURL='http://localhost:5000/appland-e-commerce-ec53d/us-central1/app/api'


export const getProduct = (id) => {
    return async(dispatch) => {
        try {
            const resp = await fetch(`${apiURL}/products/${id}`);
            
            const body = await resp.json();
           
            await dispatch(productSetActive(body.data));
            localStorage.setItem('active', JSON.stringify({...body.data}));
            
        } catch (error) {
            console.log(error)
        }

    }
}

export const productSetActive = (product) => ({
    type: types.productSetActive,
    payload: {...product}
});

export const productClearActiveproduct = () => ({ type: types.productClearActiveproduct });

export const productStartLoading = () => {
    return async(dispatch) => {
        try {
            const resp = await fetch(`${apiURL}/products`);
            
            const body = await resp.json();
           
            dispatch(productLoaded( body.data) );

        } catch (error) {
            console.log(error)
        }

    }
}
/*
export const getProductByName=(name='')=>{
    return (dispatch, getState)=>{
        const {products}=getState().product
        name=name.toLowerCase();
        const filteredProducts= products.filter(product=>product.name.toLowerCase().includes(name))
        let status=true;
        if(filteredProducts.length===0){
            status=false;
        }
        if(name.length<1){
            status=true;
        }
        localStorage.setItem('status', status);
        dispatch(setFiltered(filteredProducts))
    }
}*/
export const productLoaded = (products=[]) => ({
    type: types.productLoaded,
    payload: [...products]
})

export const setFiltered = (products) => ({
    type: types.productFiltered,
    payload: products
})

export const productLogout =() => ({ type: types.productLogout });