import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startLogOut } from '../../actions/authActions'
export const NavBar = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(state=>state.auth);
  const gotoHome=()=>{
    return navigate("/home", { replace: true });
  
  }
  const handleLogOut=()=>{
    console.log('logout');
    dispatch(startLogOut());
    navigate('/', {
      replace:true
    }) ;
  }
  return (
    <nav className="flex flex-col align-middle sm:flex-row py-4 px-6 shadow">
      <div className="mb-2 sm:mb-0" onClick={gotoHome}>
        <img src='/assets/appland-logo.png' className="w-16 md:w-18 lg:w-18"alt='logo'/>
      </div>
      <div className='text-left ml-4 align-middle h-100 text-logo' onClick={gotoHome}>
        <p className='E-commerce align-middle mt-2'>APPLAND E-COMMERCE</p>
      </div>
      
      <div className='flex ml-auto align-middle '>
        {!!user.uid ? (
          <>
            <span className='text-lg ml-4 mt-2'>{user.displayName}</span>
            <a onClick={handleLogOut} className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mt-2">logout<i className="fa fa-solid fa-arrow-right"></i></a>
          </>) :(
          <>
          {
            // <a href="/register" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mt-2">Sign Up <i className="fa fa-solid fa-user"></i></a>
          }
         
          <a href="/login" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-4 mt-2">Sign In<i className="fa fa-solid fa-arrow-right"></i></a>
          </>
        )
        }
          </div>
    </nav>
  )
}
