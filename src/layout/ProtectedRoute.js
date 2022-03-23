import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../components/UI/Sidebar';
import { useSelector } from 'react-redux';
import Spinning from '../components/subcomponents/Spinning';

const ProtectedRoute = () => {

    const { userId, profileSpinner } = useSelector( (state) => state.users )

    return(
        <>
            {
                profileSpinner ? (
                    <div className='min-h-screen flex justify-center items-center'>
                        <Spinning 
                            size='60px'
                            width='15px'
                            primaryColor='#6700C2'
                            secondary='#581c87'
                            direction='normal'
                            animateTiming='ease-in-out'
                            rotation={5}
                        />
                    </div>
                ) : userId ? (
                    <main className='md:flex min-h-screen bg-white'>
                        <Sidebar />
                            <div className='md:w-3/4 xl:w-5/6'>
                                <Outlet />
                            </div>
                    </main>
                ) : <Navigate to="/" />
            }
        </>
    )
}

export default ProtectedRoute;