import React from 'react'
import { useSelector } from 'react-redux';
import './productDetail.css'
export const Description = () => {
    const {activeProduct}=useSelector(state=>state.product);
    //const {activeProduct}=JSON.parse(localStorage.getItem('active'));
  return (
    <>
        <div>
                    <h5 className='mb-4'>Descripción:</h5>
                    <p className='mb-4'>{activeProduct.description}</p>
                </div>
                <div className='des-detail'>
                    <div >
                        <span className='text-xs uppercase font-bold text-gray-600 '>Categoría: </span><a>{activeProduct.category}</a>
                    </div>
                    <div>
                        <span className='text-xs uppercase font-bold text-gray-600'>fecha:</span> <a>{activeProduct.date}</a>
                    </div>
                    <div>
                        <span className='text-xs uppercase font-bold text-gray-600 '>tags:</span> <a>{activeProduct.tags.map(tag=>' '+tag)}</a>
                    </div>
        </div>
    
    </>
  )
}
