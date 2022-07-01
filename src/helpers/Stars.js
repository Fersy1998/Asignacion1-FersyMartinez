import React from 'react'

export const Stars = ({rate}) => {

  if(rate.length===0){
    return  (<>
    
    <i className='far fa-star'></i>
    <i className='far fa-star'></i>
    <i className='far fa-star'></i>
    <i className='far fa-star'></i>
    <i className='far fa-star'></i>
    
    </>
      )
    
  }
    //product rate
  let productRate=0;
  for(let i=0;i<rate.length;i++){productRate+=rate[i];}
  productRate=productRate/(rate.length);
  let halfstar=false;
  const decPart = productRate%1;
  let x;
  if(decPart===0){
    x=5-productRate;
  }else{
    halfstar=true;
    x=Math.floor(5-productRate);
    productRate=Math.floor(productRate);
  }
  //return {productRate, halfstar, x}
  
  return(<>
        {
          [...Array(productRate)].map((e, i)=> <i className='fas fa-star' key={i}></i>)
        }
        {
           halfstar && (<i className="fas fa-star-half" ></i>)
        }
        {
          [...Array(x)].map((e, i)=> <i className='far fa-star' key={i} ></i>)
        }
    </>)
 
}
