import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Search } from '../search/Search'
import { ProductCard } from './ProductCard'
import './productCard.css'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
//import { getProductByName } from '../../helpers/selectorByName'
export const Home = () => {
  
  const location=useLocation();
  const {products}=useSelector(state=>state.product);
  const getProductByName=(name='')=>{
    
    name=name.toLowerCase();
    const filteredProducts= products.filter(product=>product.name.toLowerCase().includes(name))
    let status=true;
    if(filteredProducts.length===0){
        status=false;
    }
    if(name.length<1){
        status=true;
    }
    return {
        filteredProducts,
        status
    };
    
}
  const {q=''}=queryString.parse(location.search);
  const [valueToOrder, setValueToOrder] = useState('ascendente');
  let {filteredProducts=[], status}= getProductByName(q)
  
  filteredProducts.map(product=>{
          let productRate=0;
          for(let i=0;i<product.rate.length;i++){productRate+=product.rate[i];}
          productRate=productRate/(product.rate.length);
          product.rateX=productRate;
  })
  
  let orderedProducts;
  if(valueToOrder==='ascendente'){
    orderedProducts= filteredProducts.slice().sort((productA, productB) => productA.rateX - productB.rateX);
  }else{
    orderedProducts= filteredProducts.slice().sort((productA, productB) => productB.rateX - productA.rateX);
  }
  const setValue=(e)=>{
      setValueToOrder(e.target.value);
  }
  
  return (
    <>  
    <div className="wrap mr-auto ml-auto">
        <Search />
        <div className='select text-right ml-auto mb-5'>Ordenar por calificación: 
            <select className="select-button" value={ valueToOrder } onChange={ setValue }>
                <option value="ascendente" >ascendente</option>
                <option value="descendente" >descendente</option>
            </select>
        </div>
          {
            status
            ?(
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 myProducts">
              {
                orderedProducts.map(product=>(<div key={product.id}><ProductCard product={product}/></div>))
              }
              
            </div>
            
            )
            :(
              !status ? ( 
                <div className="px-4 py-4 text-blue-800 bg-blue-300 rounded shadow-lg shadow-blue-500/50" role="alert">
                  No hay resultados para {q}
                </div>)
              :
                (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 myProducts">
                  {
                    products.map(product=>(<div key={product.id}><ProductCard product={product}/></div>))
                  }
                  
                </div>
                
                
                ))
          }
        
    </div>
    </>
  )
}
