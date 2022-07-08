
import { types } from '../types/types';
import { arrange } from './commentAndCalificationActions';
const apiURL='http://localhost:5000/appland-e-commerce-ec53d/us-central1/app/api'


export const getProduct = (id) => {
    return async(dispatch) => {
        try {
            const resp = await fetch(`${apiURL}/products/${id}`);
            
            const body = await resp.json();
            
            const comments=arrange(body.data.comments);
            
            await dispatch(productSetActive({...body.data, comments}));
            
            localStorage.setItem('active', JSON.stringify({...body.data, comments}));
            
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
           
            dispatch(productLoaded([...body.data]) );

        } catch (error) {
            console.log(error)
        }

    }
}

export const productLoaded = (products=[]) => ({
    type: types.productLoaded,
    payload: [...products]
})

export const productLogout =() => ({ type: types.productLogout });