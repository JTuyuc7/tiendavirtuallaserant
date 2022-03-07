import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Login from './components/pages/Login';
import MyOrders from './components/pages/MyOrders';

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/my-orders' element={<MyOrders />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;