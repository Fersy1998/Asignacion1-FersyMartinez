import React from 'react'
import './footer.css'
export const Footer = () => {
  return (
    <div className='footer flex'>
        <div className=''>
            <h5>@appland-e-commerce</h5>
        </div>
        <div>
            <h5>Todos los derechos reservados</h5>
        </div>
        <div className='social-media'>
            <div><i className="fa fa-brands fa-facebook"></i></div>
            <div><i className="fa fa-brands fa-twitter"></i></div>
            <div><i className="fa fa-brands fa-google"></i></div>
            <div><i className="fa fa-solid fa-envelope"></i></div>
            
        </div>
    
    </div>
  )
}
