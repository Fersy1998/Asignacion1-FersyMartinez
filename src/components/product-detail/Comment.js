import React from 'react';
import { useSelector } from 'react-redux';
import './productDetail.css';
export const Comment = ({comment}) => {

    const nueva=comment.date.split(" ")[0].split("/").reverse().join("/");
  return (
  <>
    <div className='comment-detail mt-2 align-middle'>
        <div className='profile-comment text-center'>
        
            <div className='img-comment'> <img src={comment.photo} alt='autor-profile'/></div>
           
            <div className='text-left name-comment '>
                <a>{comment.author}</a>
             </div>
        </div>
        <div className="text-left comment-content">
            <p className='comment'>{comment.comment}</p>
        </div>
        <div className="text-left date ml-auto">
            {nueva}
        </div>
    </div>
    <hr />
</>
  )
}
