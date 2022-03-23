import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Publc Pages
import AuthLayout from './layout/AuthLayour';
import CreateAccount from './components/pages/CreateAccount';
import Login from './components/pages/Login';
import NewPassword from './components/pages/NewPassword';
import ForgotPassword from './components/pages/ForgotPassword';
import ConfirmAccount from './components/pages/ConfirmAccount';

// Protected pagegs once user has the right access
import ProtectedRoute from './layout/ProtectedRoute';
import NewDish from './components/pages/NewDish';
import OurMenu from './components/pages/OurMenu';
import EditDish from './components/pages/EditDish';
import GraphicPage from './components/pages/GraphicPage';
import Profile from './components/pages/Profile';

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

            <Routes>
              <Route path='/' element={ <AuthLayout /> } >
                <Route index element={ <Login />} />
                <Route path='/create-account' element={ <CreateAccount /> } />
                <Route path='/forgot-password' element={ <ForgotPassword /> } />
                <Route path='/forgot-password/:token' element={ <NewPassword /> } />
                <Route path='/confirm/account/:token' element={ <ConfirmAccount /> } />
              </Route>

                <Route path='/dishes' element={ <ProtectedRoute /> }>
                    <Route index element={ <OurMenu /> } />
                    <Route path='new-dish' element={<NewDish />} />
                    <Route path='edit-dish/:id' element={ <EditDish />} />
                    <Route path='dishes-graphic' element={ <GraphicPage /> } />
                    <Route path='profile' element={ <Profile /> } />
                </Route>
            </Routes>

          </BrowserRouter>
        </Provider>
      </FirebaseContext.Provider>
    </>
  )
}

export default App;