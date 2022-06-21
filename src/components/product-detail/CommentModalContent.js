import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import './productDetail.css';
export const CommentModalContent = () => {
    const {activeProduct}=useSelector(state=>state.product); 
    const [valueStar, setValueStar] = useState(0);
    const [formValues, handleInputChange]=useForm();
    
    const {comentario}=formValues;
    const handleSubmit=(e)=>{
        e.preventDefault();
    
    }
  
  return (
    <div className="detailContainerComment mr-auto ml-auto">
        <form onSubmit={handleSubmit}>
        <div className='image-and-description flex'>
            <div className='mb-4 w-50'>
                <div className='mb-4 w-50 font-bold text-center'>{activeProduct.name}</div>
                <img src={activeProduct.logo} alt='imageProduct'/>
            </div>
            <div className='description-detail text-left m-auto w-50'>
                <div className='text-bold font-bold'>Calificar este producto:</div>
                <div className="stars text-center au-st " >
                    <a href="#openModal ">
                        <i className='fas fa-star' onClick={()=>setValueStar(1)}></i>
                        <i className='fas fa-star' onClick={()=>setValueStar(2)}></i>
                        <i className='fas fa-star' onClick={()=>setValueStar(3)}></i>
                        <i className='fas fa-star' onClick={()=>setValueStar(4)}></i>
                        <i className='fas fa-star' onClick={()=>setValueStar(5)}></i>
                    </a>                    
                </div>
                <div className='text-bold font-bold'>Dejar un comentario:</div>
                <div> 
                    <input type="number" className='oculto' name='stars'value={valueStar}/>
                    <textarea name="comentario" placeholder='Añade un comentario...' value={comentario}/>
                </div>
                <div className='mt-2 text-right mr-14'><button onClick={handleSubmit}>Enviar <i className="fas fa-solid fa-paper-plane ml-2"></i></button></div>
            </div>
        </div>
        </form>
    </div>
  )
}
