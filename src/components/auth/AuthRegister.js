import React from 'react'
import './Auth.css'
export const AuthRegister = () => {
  return (
    <div class="container-AuthRegister flex flex-col sm:flex-row py-4 px-6">
    {<div class="image-back"><img src="/assets/carrito-e-commerce.jpeg"alt="carrito-compras"/></div>
}
    <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-6 dark:bg-gray-800 dark:border-gray-700 ml-auto mr-auto">
      <form className="space-y-6" action="#">
          <div className='text-center'>
            <h5 className="text-xl font-medium text-gray-900 text-grey">Registrarse con:</h5>
          </div>
          
              <div className="google-btn align-middle">
                <hr />
                <div className="google-icon-wrapper align-middle text-right mb-2">
                  <img className="google-icon mr-2" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                  <p className="btn-text align-middle mt-3 ml-auto "><b>Sign up with google</b></p>
                </div>
                <hr />
              </div>
        
         
          
              <div className="facebook-btn">
                <div className="facebook-icon-wrapper text-right  mb-2">
                  <img className="facebook-icon  mr-2" src="https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Background-Image.png"/>
                  <p className="btn-text align-middle flex mt-3 ml-auto"><b>Sign up with Facebook</b></p>
                </div>
                <hr />
              </div>
        
        
          <div className="registrarse text-sm font-medium text-gray-500 dark:text-gray-300 ">
              ¿Ya tienes una cuenta? <a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Iniciar sesión</a>
          </div>
      </form>
  </div>
</div>
  )
}
