import React from 'react';
import { Outlet } from 'react-router-dom';
import bgImage from '../assets/bgImage.jpg';

const AuthLayout = () => {

    return(
        <>
            <main 
                style={{ backgroundImage: `url(${bgImage})`}}
                className='bg-cover mx-auto p-5 flex items-center md:flex flex-col min-h-screen md:justify-center justify-center'
            >
                <div className='md:w-2/3 lg:w-2/5'>
                    <Outlet />
                </div>
            </main>            
        </>
    )
}

export default AuthLayout;