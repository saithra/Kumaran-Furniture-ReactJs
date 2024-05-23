import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Furn_nav from './furn_nav'
import Sales from './sales'
import Inspire from './inspire'
import Fun_home from './fun_home'
import Tables from './tables'
import Ourstore from './ourstore'

function Furn_router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Fun_home/>}/>
        <Route path='/sales' element={<Sales/>}/>
        <Route path="/inspiration" element={<Inspire/>}/>
        <Route path="/tables" element={<Tables/>}/>
        <Route path='/ourstores' element={<Ourstore/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Furn_router
