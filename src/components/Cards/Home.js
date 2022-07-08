import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Search } from '../search/Search'
import { ProductCard } from './ProductCard'
import './productCard.css'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { productLoaded } from '../../actions/productActions'
//import { getProductByName } from '../../helpers/selectorByName'
export const Home = () => {
  
  const location=useLocation();
  const products=useSelector(state=>state.product.products);
  const myProducts=Array.from(products);
  
  const getProductByName=(name='')=>{
    
    name=name.toLowerCase();
    let filteredProducts= myProducts.filter(product=>product.name.toLowerCase().includes(name))
    let status=true;
    if(name.length<1){
      status=false;
    }
    if(filteredProducts.length===0){
        status=false;
    }
    return {
        filteredProducts,
        status
    };
}
  const {q=''}=queryString.parse(location.search);
  const [valueToOrder, setValueToOrder] = useState('');
  const [oldValueToOrder, setoldValueToOrder] = useState(valueToOrder)
  const {filteredProducts=[], status}= getProductByName(q)
  const [check, setcheck] = useState(q)
 

  const theRate=(array=[])=>{
   
    let productRate=0;
    if(array.length===0){
      
      return productRate;
    }else{
      for(let i=0;i<array.length;i++){productRate+=array[i];}
      productRate=productRate/(array.length);
      
      return productRate;
    }
  }
  
  const arrange=()=>{
    let orderedProducts;
    if(valueToOrder==='ascendente'){
      orderedProducts= filteredProducts.slice().sort((productA, productB) => theRate(productA.rate) - theRate(productB.rate));
    }else if(valueToOrder==='descendente'){
      orderedProducts= filteredProducts.slice().sort((productA, productB) => theRate(productB.rate) - theRate(productA.rate));
    }else{
      orderedProducts=[...filteredProducts];
    }
      return orderedProducts
    
    
  }
  const [ordered, setordered] = useState([...arrange()]);
  useEffect(() => {
   
    if(check !== q || valueToOrder !== oldValueToOrder ){
      let orderedProducts=[...arrange()];
      setordered([...orderedProducts]);
      setcheck(q)
    }
  }, [setordered, check, q, valueToOrder, oldValueToOrder])
  
  const setValue=(e)=>{
      e.persist();
      setoldValueToOrder(valueToOrder);
      setValueToOrder(e.target.value);
      let orderedProducts=[...arrange()];
      setordered([...orderedProducts]);
  }
  

  return (
    <>  
    <div className="wrap mr-auto ml-auto">
        <Search />
        <div className='select text-right ml-auto mb-5'>Ordenar por calificación: 
            <select className="select-button" onChange={setValue} value={valueToOrder}>
                <option value=""  >Seleciona una Opcion </option>
                <option value="ascendente">ascendente</option>
                <option value="descendente">descendente</option>
            </select>
        </div>
        
          {
            status
            ?(
              <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 myProducts">
              {
                ordered.map(product=>(<div key={product.id}><ProductCard product={product}/></div>))
              }
              </div>
            )
            :(
              ((!status) && (q!=='')) ? ( 
                <div className="px-4 py-4 text-blue-800 bg-blue-300 rounded shadow-lg shadow-blue-500/50" role="alert">
                  No hay resultados para {q}
                </div>)
              :
                (<div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 myProducts">
                  {
                    ordered.map(product=>(<div key={product.id}><ProductCard product={product}/></div>))
                  }
               
               </div>))
          }
              
    </div>
    </>
  )
}
