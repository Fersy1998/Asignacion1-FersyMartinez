import React from 'react'
import './productCard.css'
import { useNavigate } from 'react-router-dom'
import { Stars } from '../../helpers/Stars';
export const ProductCard = ({product}) => {
  const navigate=useNavigate();
  
  const gotoDetail=()=>{
      localStorage.setItem('active', JSON.stringify(product));
      return navigate("/product-detail", { replace: true });
    
  }
  
  return (
    <div className="productCardContainer">
     <div className="card">
        <div className="content">
          <div className="front">
            <img className="product img-fluid" src={product.logo} alt="product" />
          
          </div>
          <div className="back from-left text-center ">
            <button className="verMas" onClick={gotoDetail}>VER MÁS</button>
          </div>
        </div>
      </div>
      <div className="stars text-center mt-2 font-bold ">
      
        <h2>{product.name}</h2>
        <Stars rate={product.rate} />
    
      </div>
      <div className='shortDescription'><p>{product.description}</p></div>
    </div>



  )
}
