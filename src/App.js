import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Login from './components/pages/Login';
import NewDish from './components/pages/NewDish';
import OurMenu from './components/pages/OurMenu';
import EditDish from './components/pages/EditDish';
import GraphicPage from './components/pages/GraphicPage';
import EditDishT from './components/pages/EditDishT';

// Import SideBar
import Sidebar from './components/UI/Sidebar';

import { store } from '../src/app/store';
import { Provider } from 'react-redux';

// Firebase
import firebase, {FirebaseContext} from './components/firebase/index';

const App = () => {
  return(
    <>
      <FirebaseContext.Provider
        value={{ firebase }}
      >
        <Provider
          store={store}
        >
          <BrowserRouter>

            <div className='md:flex min-h-screen bg-white'>
            <Sidebar />

              <div className='md:w-3/4 xl:w-5/6'>
                <Routes>
                  {/*<Route path='/' element={<Login />} />*/}
                  <Route path='/' element={ <OurMenu />} />
                  <Route path='/new-dish' element={<NewDish />} />
                  <Route path='/edit-dish/:id' element={ <EditDish />} />
                  {/* <Route path='/edit-dish/:id' element={ <EditDishT /> } /> */}
                  <Route path='/dishes-graphic' element={ <GraphicPage /> } />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </Provider>
      </FirebaseContext.Provider>
    </>
  )
}

export default App;