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
import { getProduct } from '../../actions/productActions'
export const ProductDetail = () => {
    
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {uid}=useSelector(state=>state.auth);
    const [product, setProduct] = useState(false);
    const [checking, setchecking] = useState(false);
    const {comments, rate}=useSelector(state=>state.product.activeProduct);
    
    useEffect(() => {
      (async()=>{
        const active=JSON.parse(localStorage.getItem('active'));
        await dispatch(getProduct(active.id));
        setProduct(JSON.parse(localStorage.getItem('active')));
      })()
    }, [dispatch, setProduct])
    
    const gotoHome=()=>{
        return navigate("/home", { replace: true });
    }
    if(product===false){
        
        return (
          <div className='text-center align-middle spinner'>
          <svg role="status" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
          </svg>
          </div>
          )
        ;
      
    }else{
      return (
        <>
        <div className="detailContainer mr-auto ml-auto">
            <div className='titleDetail'>
                <div className=' mb-4 '>{product.name}</div>
                <div  onClick={gotoHome}><i className="fas fa-solid fa-arrow-left "></i></div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
               
                    { 
                    //<div className='images-container'>
                    //<img className='banner' src={product.banner} alt='imageBanner'/>
                    //<img className='product-image' src={product.logo} alt='imageProduct'/>
                    // </div>
                    }
                    
                <div><img className='product-img' src={product.logo} alt='imageProduct'/></div>
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
                    {
                        (rate!==[]) && ( <Stars rate={rate} />)
                    
                    }
                      
                    </a>
                    
                </div>
                
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" 
                    type="button" data-mdb-toggle="collapse" 
                    data-mdb-target="#collapseOne" 
                    aria-expanded="false" aria-controls="collapseOne">Comentarios</button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                  <div className="accordion-body">
                        {
                        (comments.length !==0) ? (comments.map(comment=> <Comment key={comment.id} comment={comment}/>))
                        :(<h2>A??n no hay comentarios</h2>)
                        }
                      
                  </div>
                </div>
            </div>
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
}

