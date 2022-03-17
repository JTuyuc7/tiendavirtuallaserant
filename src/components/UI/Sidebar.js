import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillHouseDoorFill, BsFillPlusSquareFill, BsFileBarGraphFill } from 'react-icons/bs';
import { selectedImg } from '../../features/dishesSlice';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
    const dispatch = useDispatch();

    let activeStyle = {
        textDecoration: 'none',
        backgroundColor: '#6b46c1',
        color: '#000'
    }

    const newDishToBeAdded = () => {
        dispatch(selectedImg(''))
        //dispatch(selectedImg('https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_1280.jpg'))
    }

    return(
        <>
            <div className='bg-purple-500 md:w-1/4 xl:w-1/6 shadow-2xl shadow-gray-600 rounded-b-3xl md:rounded-b-none'>
            {/*<div className='bg-yellow-500 sm:w-2/6 xl:w-1/6 shadow-3xl'>*/}

                <div className=' p-5 md:p-3  min-h-fit md:min-h-screen'>

                    <div className='md:mb-7 md:mt-4 text-center'>
                        {/*<h1 className='text-white uppercase font-bold text-center'>Restaurante - Admin</h1>*/}
                        <NavLink
                            className='text-white uppercase font-bold' 
                            to={'/'}
                        >
                            Restaurante - Admin
                        </NavLink>
                    </div>

                    <div className=' flex mt-3 justify-around md:flex-col'>
                        <div className='mb-3 hover:scale-105 shadow-lg rounded-md'>
                            <NavLink
                                style={ ({isActive}) => isActive ? activeStyle : undefined}
                                className='flex p-3 justify-between rounded-md uppercase font-bold'
                                to={'/'}
                            >
                                <h2 className='hidden md:contents text-gray-100'>Home</h2>
                                <h3 className='text-2xl text-gray-200'> <BsFillHouseDoorFill /> </h3>
                            </NavLink>
                        </div>
                        
                        <div className='mb-3 hover:scale-105 shadow-2xl rounded-md'>
                            <NavLink
                                onClick={ () => newDishToBeAdded() }
                                style={ ({isActive}) => isActive ? activeStyle : undefined}
                                className='flex p-3 justify-between rounded-md uppercase font-bold text-gray-800'
                                to={'/new-dish'}
                            >
                                <h2 className='hidden md:contents text-md text-gray-100'>New dish</h2>
                                <h3 className=' text-2xl text-gray-200'> <BsFillPlusSquareFill /></h3>
                            </NavLink>
                        </div>

                        <div className='mb-3 hover:scale-105 shadow-2xl rounded-md'>
                            <NavLink
                                //onClick={ () => newDishToBeAdded() }
                                style={ ({isActive}) => isActive ? activeStyle : undefined}
                                className='flex p-3 justify-between rounded-md uppercase font-bold text-gray-800'
                                to={'/dishes-graphic'}
                            >
                                <h2 className='hidden md:contents text-md text-gray-100'>Graphic</h2>
                                <h3 className=' text-2xl text-gray-200'> <BsFileBarGraphFill /></h3>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;