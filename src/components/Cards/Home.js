import React from 'react'
import { useSelector } from 'react-redux'
import { Search } from '../search/Search'
import { ProductCard } from './ProductCard'
import './productCard.css'
export const Home = () => {
  const {products}=useSelector(state=>state.product);
  const {filtered}=useSelector(state=>state.product);
  
  
  if(filtered && filtered.length > 0){
    
  }
  return (
    <>
        <Search />
          {
            filtered && filtered.length>0 
            ?(
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container">
              {
                filtered.map(product=>(<div key={product.id}><ProductCard product={product}/></div>))
              }
              
            </div>
            
            )
            :
            (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container">
              {
                products.map(product=>(<div key={product.id}><ProductCard product={product}/></div>))
              }
              
            </div>
            
            
            )
          }
        
    </>
  )
}
