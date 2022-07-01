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
                    <div>
                        Categoría: <a>{activeProduct.category}</a>
                    </div>
                    <div>
                        fecha: <a>{activeProduct.date}</a>
                    </div>
                    <div>
                        Tags: <a>{activeProduct.tags.map(tag=>' '+tag)}</a>
                    </div>
        </div>
    
    </>
  )
}
