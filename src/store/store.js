import { configureStore} from '@reduxjs/toolkit'
import { combineReducers} from 'redux'
import { authReducer } from '../reducers/authReducer';
import { productReducer } from '../reducers/productReducer';
//import { notesReducer } from '../reducers/notesReducer';

const reducers=combineReducers({
    auth:authReducer,
    product:productReducer
})

export const store=configureStore({reducer:reducers})