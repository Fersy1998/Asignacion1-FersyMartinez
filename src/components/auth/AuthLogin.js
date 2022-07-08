import React, { useEffect, useState } from 'react'
import './Auth.css'
import {startGoogleLogin, startFacebookLogin }  from '../../actions/authActions'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
export const AuthLogin = () => {
  
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(state=>state.auth)
  const [userActive, setActiveUser] = useState(user);
  useEffect(() => {
      if(user?.uid){
          setActiveUser(true);
          navigate('/', {
              replace:true
            }) ;
        }else{
          setActiveUser(false);
        }
  }, [setActiveUser])
    const handleGoogleLogin=()=>{
      dispatch(startGoogleLogin() );
      
    }
    const handleFacebookLogin=()=>{
      dispatch(startFacebookLogin() );
      
    }
  return (
    <div className="container-AuthLogin flex flex-col sm:flex-row py-4 px-6">
    {<div className="image-back"><img src="/assets/carrito-e-commerce.jpeg"alt="carrito-compras"/></div>
}
    <div className="p-4 max-w-sm bg-white white-bg rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-6 dark:bg-gray-800 dark:border-gray-700 ml-auto mr-auto">
      <form className="space-y-6" action="#">
          <div className='text-center'>
            <h5 className="text-xl font-medium text-gray-900 text-grey">Inicio de sesión</h5>
          </div>
          
              <div className="google-btn align-middle" onClick={handleGoogleLogin}>
                <hr />
                <div className="google-icon-wrapper align-middle text-right mb-2">
                  <img className="google-icon mr-2" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                  <p className="btn-text align-middle mt-3 ml-auto "><b>Sign in with google</b></p>
                </div>
                <hr />
              </div>
        
         
          
              <div className="facebook-btn" onClick={handleFacebookLogin}>
                <div className="facebook-icon-wrapper text-right  mb-2">
                  <img className="facebook-icon  mr-2" src="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Background-Image.png"/>
                  <p className="btn-text align-middle flex mt-3 ml-auto"><b>Sign in with Facebook</b></p>
                </div>
                <hr />
              </div>
        
        {
        /*
        <div className="registrarse text-sm font-medium text-gray-500 dark:text-gray-300 ">
        ¿No tienes una cuenta? <a href="/register" className="text-blue-700 hover:underline dark:text-blue-500">Regístrate</a>
        </div>*/
        
        }
          
      </form>
  </div>
</div>
  )
}
