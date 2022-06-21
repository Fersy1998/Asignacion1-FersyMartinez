import React from 'react'
import { Provider } from 'react-redux'
/*
import { AuthLogin } from './components/auth/AuthLogin'
import { AuthRegister } from './components/auth/AuthRegister'
import { ProductCard } from './components/Cards/ProductCard'
import { ProductDetail } from './components/product-detail/ProductDetail'
import { Search } from './components/search/Search'
import { Footer } from './components/ui/Footer'
import { NavBar } from './components/ui/NavBar'*/
import { AppRouter } from './routes/AppRouter'

import {store} from './store/store';
export const ECommerceApp = () => {
  return (
    <>
    <Provider store={store}>
    
      <AppRouter />
    
    </Provider>
    
    </>
  )
}
