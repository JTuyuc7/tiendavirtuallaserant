import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsFillHouseDoorFill, BsFillPlusSquareFill, BsFileBarGraphFill, BsFillPersonFill, BsBoxArrowInRight } from 'react-icons/bs';
import { selectedImg, selectPage, clearDishesSlice } from '../../features/dishesSlice';
import { logOutAction } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigationDetails } from '../hooks/useNavigationDetails';

const Sidebar = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const { pageSelected } = useSelector( (state) => state.dishes )
    const { user } = useSelector( (state) => state.users )
    const { setNewUrl } = useNavigationDetails();
    const urlStorage = localStorage.getItem('$URL')
    const newDishToBeAdded = () => {
        dispatch(selectPage('new-dish'))
        dispatch(selectedImg(''))
        setNewUrl('new-dish')
    }

    const closeSession = () => {
        localStorage.removeItem('$token')
        localStorage.removeItem('$URL')
        dispatch(logOutAction())
        dispatch(clearDishesSlice())
        navigation('/')
    }
    const changePage = (data) => {
        dispatch(selectPage(data))
    }

    useEffect(() => {
        if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
            if(urlStorage === 'dishes') return;
            navigation(urlStorage)
            dispatch(selectPage(urlStorage))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <>
            <div className='bg-purple-500 md:w-1/4 xl:w-1/6 shadow-2xl shadow-gray-600 rounded-b-3xl md:rounded-b-none'>
                <div className='p-5 md:p-3  min-h-fit md:min-h-screen'>

                    <div className='md:mb-7 md:mt-4 text-center'>
                        <NavLink
                            onClick={ () => {changePage('dishes'); setNewUrl('dishes')}}
                            className='text-white uppercase font-bold' 
                            to={'/dishes'}
                        >
                            Restaurante - Admin
                        </NavLink>
                    </div>

                    <div className='mt-3 md:min-h-full justify-between flex flex-col'>
                        <div className='justify-around md:flex-col flex'>
                            <div className='mb-3 hover:scale-105 shadow-lg rounded-md'>
                                <NavLink
                                    onClick={ () => {changePage('dishes'); setNewUrl('dishes')}}
                                    style={{ backgroundColor: pageSelected === 'dishes' ? '#6b46c1': '' }}
                                    className='flex p-1 md:p-2 justify-between rounded-md uppercase font-bold'
                                    to={'/dishes'}
                                >
                                    <h2 className='hidden md:contents text-gray-100'>Home</h2>
                                    <div>
                                        <h3 className='text-xl text-gray-200 justify-center flex'> <BsFillHouseDoorFill /> </h3>
                                        <h4 className='text-white contents md:hidden text-min mt-3 font-normal'>Home</h4>
                                    </div>
                                </NavLink>
                            </div>
                            
                            <div className='mb-3 hover:scale-105 shadow-2xl rounded-md'>
                                <NavLink
                                    onClick={ () => newDishToBeAdded() }
                                    style={{ backgroundColor: pageSelected === 'new-dish' ? '#6b46c1': '' }}
                                    className='flex p-1 md:p-2 justify-between rounded-md uppercase font-bold text-gray-800'
                                    to={'new-dish'}
                                >
                                    <h2 className='hidden md:contents text-md text-gray-100'>New dish</h2>
                                    <div>
                                        <h3 className=' text-xl text-gray-200 justify-center flex'> <BsFillPlusSquareFill /></h3>

                                        <h4 className='text-white contents md:hidden text-min mt-3 font-normal'>New dish</h4>
                                    </div>
                                </NavLink>
                            </div>

                            <div className='mb-3 hover:scale-105 shadow-2xl rounded-md'>
                                <NavLink
                                    onClick={ () => {changePage('dishes-graphic'); setNewUrl('dishes-graphic')}}
                                    style={{ backgroundColor: pageSelected === 'dishes-graphic' ? '#6b46c1': '' }}
                                    className='flex p-1 md:p-2 justify-between rounded-md uppercase font-bold text-gray-800'
                                    to={'dishes-graphic'}
                                >
                                    <h2 className='hidden md:contents text-md text-gray-100'>Graphic</h2>
                                    <div>
                                        <h3 className=' text-xl text-gray-200 justify-center flex'> <BsFileBarGraphFill /></h3>
                                        <h4 className='text-white contents md:hidden text-min mt-3 font-normal'>Graphics</h4>
                                    </div>
                                </NavLink>
                            </div>

                            <div className='mb-3 hover:scale-105 shadow-2xl rounded-md'>
                                <NavLink
                                    onClick={ () => {changePage('profile'); setNewUrl('profile')}}
                                    style={{ backgroundColor: pageSelected === 'profile' ? '#6b46c1': '' }}
                                    className='flex p-1 md:p-2 justify-between rounded-md uppercase font-bold text-gray-800'
                                    to={'profile'}
                                >
                                    <h2 className='hidden md:contents text-md text-gray-100'>Profile</h2>
                                    <div>
                                        <h3 className=' text-xl text-gray-200 justify-center flex'> <BsFillPersonFill/></h3>
                                        <h4 className='text-white contents md:text-sm md:hidden text-min mt-3 font-normal'>Profile</h4>
                                    </div>
                                </NavLink>
                            </div>

                            <div 
                                onClick={ () => closeSession() }
                                className='mt-0 md:mt-64 mb-3 shadow-2xl rounded-md md:fixed bottom-5 left-10'
                            >
                                <div
                                    className="flex flex-col p-1 md:p-2 justify-center rounded-md uppercase font-bold text-gray-800 hover:scale-105 hover:cursor-pointer"
                                >
                                    <h3 className='text-white hidden md:contents text-center text-min font-black'>Signed as: <span className='font-semibold hidden md:contents'>{user.firstName}</span></h3>
                                    <div className='items-center flex justify-center flex-col'>
                                        <h3 className='text-2xl text-white'><BsBoxArrowInRight/> </h3>
                                        <h4 className='text-white contents text-min mt-3 font-normal'>LogOut</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;