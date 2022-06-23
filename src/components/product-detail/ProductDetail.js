import React, { useEffect, useState } from 'react'
import { Comment } from './Comment'
import { Description } from './Description'
import './productDetail.css'
import './modal.css'
import { CommentModalContent } from './CommentModalContent'
import { NoAuthModal } from './NoAuthModal'
import { useNavigate } from 'react-router-dom'
import { Stars } from '../../helpers/Stars'
import { useSelector, useDispatch } from 'react-redux'
import { productSetActive } from '../../actions/productActions'
export const ProductDetail = () => {
    
    const navigate=useNavigate();
    const dispatch=useDispatch();
    
    const {uid}=useSelector(state=>state.auth);
    const active=JSON.parse(localStorage.getItem('active'));
    let product=active;
    dispatch(productSetActive(active));
    console.log(uid);
    
    const {comments}=active;
    const gotoHome=()=>{
        return navigate("/home", { replace: true });
      }
  return (
    <>
    <div className="detailContainer mr-auto ml-auto">
        <div className='titleDetail'>
            <div className=' mb-4 '>{product.name}</div>
            <div  onClick={gotoHome}><i className="fas fa-solid fa-arrow-left "></i></div>
        </div>
        <div className='flex'>
            <div className='images-container'>
                <img className='banner' src={product.banner} alt='imageBanner'/>
                <img className='product-image' src={product.logo} alt='imageProduct'/>
            </div>
            <div className='description-detail text-left m-auto'>
                <Description />
            </div>
        </div>
        <div className='autor-detail mt-2 align-middle'>
        <div className='img-profile-autor text-center'><img src={product.photo} alt='autor-profile'/></div>
            <div className='text-left au-st'>
                 
                Autor: <a>{product.author}</a>
            </div>
            <div className="stars text-center au-st " >
                <a href="#openModal ">
                    <Stars rate={product.rate} />
                </a>
                
            </div>
        </div>
        <div className='text-left font-bold'><h1>Reseñas</h1></div>
        <div className='comments-section'>
            {
            comments.map(comment=> <Comment key='comment.author' comment={comment} />)
            }
          
        </div>
    </div>

        
    <div id="openModal" className="modalDialog">
        <div>	
            <div className='text-right'> <a href="#close" title="Close" className="close ml-auto">X</a></div>
            {
                !!uid ? (<CommentModalContent />) : <NoAuthModal />
            }
        </div>
    </div>
    </>
  )
}


