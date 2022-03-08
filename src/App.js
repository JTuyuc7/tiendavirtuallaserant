import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Login from './components/pages/Login';
import NewDish from './components/pages/NewDish';
import OurMenu from './components/pages/OurMenu';
import EditDish from './components/pages/EditDish';

// Import SideBar
import Sidebar from './components/UI/Sidebar';

const App = () => {
  return(
    <>
      <BrowserRouter>

        <div className='md:flex min-h-screen bg-white'>
        <Sidebar />

          <div className='md:w-3/4 xl:w-5/6'>
            <Routes>
              {/*<Route path='/' element={<Login />} />*/}
              <Route path='/' element={ <OurMenu />} />
              <Route path='/new-dish' element={<NewDish />} />
              <Route path='/edit-dish/:id' element={ <EditDish />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;