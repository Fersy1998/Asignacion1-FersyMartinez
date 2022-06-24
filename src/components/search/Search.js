import React, { useEffect, useMemo, useState } from 'react'
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
    
    const {q=''}=queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({searchElement:q});
    const {searchProduct}=formValues;
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        navegador(`?q=${searchProduct}`);
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
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
       
    </form>
    </>
  )
}
