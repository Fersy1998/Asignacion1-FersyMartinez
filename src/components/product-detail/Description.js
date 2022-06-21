import React from 'react'
import { useSelector } from 'react-redux';
import './productDetail.css'
export const Description = () => {
    const {activeProduct}=useSelector(state=>state.product);
    const product=activeProduct;
  return (
    <>
        <div>
                    <h5 className='mb-4'>Descripción:</h5>
                    <p className='mb-4'>{product.description}</p>
                </div>
                <div className='des-detail'>
                    <div>
                        Categoría: <a>{product.category}</a>
                    </div>
                    <div>
                        fecha: <a>{product.date}</a>
                    </div>
                    <div>
                        Tags: <a>{product.tags.map(tag=>' '+tag)}</a>
                    </div>
        </div>
    
    </>
  )
}
