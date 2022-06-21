import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
export const AppRouter = () => {
  return (
    <BrowserRouter>
      
    <Routes>
        <Route 
            path="/*" 
            element={<AuthRouter />}
        />
        
    </Routes>

</BrowserRouter>
  )
}
