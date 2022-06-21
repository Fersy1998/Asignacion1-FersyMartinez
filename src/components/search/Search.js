import React from 'react'
import './search.css'
export const Search = () => {
  return (
    <>
    <div className="wrap mr-auto ml-auto">
        <div className="search">
           <input type="text" className="searchTerm" placeholder="Search..." />
           <button type="submit" className="searchButton">
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
   
    </>
  )
}
