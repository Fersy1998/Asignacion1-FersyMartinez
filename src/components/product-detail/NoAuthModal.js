import React from 'react'
import './modal.css'
export const NoAuthModal = () => {
  return (
    <div>  
        <h2 className="font-bold mb-2 mt-2">Necesitas iniciar sesión para realizar esta acción</h2>
        <div className='flex ml-auto align-middle auth-reg'>
            <div className='mb-5'>
                <a href="" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mt-5">Sign Up <i class="fa fa-solid fa-user"></i></a>
            </div>
            <div  className='mb-5'>
                <a href="" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mt-5">Sign In<i class="fa fa-solid fa-arrow-right"></i></a>
            </div>
           
        </div>
    
    </div>
  )
}
