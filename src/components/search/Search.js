import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductByName } from '../../helpers/selectorByName';
import { useForm } from '../../hooks/useForm';
import './search.css'
import queryString from 'query-string'
import { setFiltered } from '../../actions/productActions';
export const Search = () => {
    const navegador=useNavigate();
    const location=useLocation();
    const dispatch=useDispatch();
    //const query=queryString.parse(location);
    //Si q no existe entonces es vacío
    const {q=''}=queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({searchElement:q});
    const {searchProduct}=formValues;
    const filteredProducts= useMemo(()=>getProductByName(q), [q]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        navegador(`?q=${searchProduct}`);
        console.log(filteredProducts);
        dispatch(setFiltered(filteredProducts));
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="wrap mr-auto ml-auto">
        <div className="search">
           <input type="text" 
                  className="searchTerm" 
                  placeholder="Search..." 
                  name='searchProduct'
                  autoComplete='off'
                  value={searchProduct}
                  onChange={handleInputChange}/>
           <button type="submit" className="searchButton"  onClick={handleSubmit}>
             <i className="fa fa-search"></i>
            </button>
        </div>
        <div className='select text-right ml-auto'>Ordenar por calificación: 
            <select className="select-button" placeholder='Selecciona'>
                <option value="ascendente" >ascendente</option>
                <option value="descendente" >descendente</option>
            </select>
        </div>
      </div>
    </form>
    </>
  )
}
