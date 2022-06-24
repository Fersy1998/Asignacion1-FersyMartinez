import React from 'react'
import { AuthLogin } from '../components/auth/AuthLogin'
import { AuthRegister } from '../components/auth/AuthRegister'
import { Home } from '../components/Cards/Home'
import { ProductDetail } from '../components/product-detail/ProductDetail'
import { Footer } from '../components/ui/Footer'
import { NavBar } from '../components/ui/NavBar'
import { Routes, Route, useLocation } from 'react-router-dom'

export const AuthRouter = ({isAuthenticated}) => {
  //const location=useLocation();
    //desestructuramos y obtenemos el pathname y el search
    const {pathname, search}=useLocation();
    localStorage.setItem('last_path',pathname+search);
  return (
    <>
    <NavBar/>
                <Routes>
                        {
                        !isAuthenticated && (<><Route exact path='/login' element={<AuthLogin />} /><Route exact path='/register' element={<AuthRegister />} /></>)
                        }
                          
                          <Route exact path='/product-detail' element={<ProductDetail/>}/>
                          <Route exact path='/inicio' element={<Home/>}/>
                          <Route exact path='/*' element={<Home/>}/>
    
                </Routes>
    <Footer />
    </>   
  )
}
