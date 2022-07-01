import { configureStore} from '@reduxjs/toolkit'
import { combineReducers} from 'redux'
import { authReducer } from '../reducers/authReducer';
import { productReducer } from '../reducers/productReducer';
//import { notesReducer } from '../reducers/notesReducer';

const reducers=combineReducers({
    product:productReducer,
    
    auth:authReducer
})

export const store=configureStore({
    reducer:reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: 'http://localhost:5000/appland-e-commerce-ec53d/us-central1/app/api',
      },
      serializableCheck: false,
      inmutableCheck:false
    })
})