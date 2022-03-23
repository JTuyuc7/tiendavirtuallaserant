import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dish from '../subcomponents/Dish';
import { BsArrowUp, BsPlusCircle } from 'react-icons/bs';
import { getAllDishesAction } from '../../services/dishesServices';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../subcomponents/LoadingPage';
import { selectedImg } from '../../features/dishesSlice';

const OurMenu = () => {
    const navigation = useNavigate()
    const [ isVisible, setIsVisible ] = useState(false);

    const dispatch = useDispatch();
    const { loading, dishes } = useSelector( (state) => state.dishes);
    const [ search, setSearch ] = useState('')
    
    let filteredData = dishes.filter( (ele) => {
        return ele.category.toLowerCase().indexOf( search.toLowerCase()) > -1
    });

    // Get Data
    useEffect(() => {
        dispatch(getAllDishesAction())
    },[])

    const toogleVisivility = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true);
        }else {
            setIsVisible(false);
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', toogleVisivility )
    }, [])

    const newDishAdded = () => {
        dispatch(selectedImg(''))
        navigation('new-dish')
    }

    return(
        <>
            <div className='min-h-screen flex flex-col p-7'>
                { loading ? (
                    <LoadingPage />
                ): (
                    <>
                        <div className='mb-4 mt-4'>
                            <select
                                id='search'
                                className="shadow appearance-none border-2 border-gray-700 text-center font-bold rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                name='search'
                                onChange={ (e) => setSearch(e.target.value)}
                            >
                                <option value=""> -- Filter all --</option>
                                <option value="food">Food</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">Drink</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>
                    <div className='mt-5 mb-5'>
                        <h1 className='text-center font-bold uppercase text-2xl mb-5'>{ search && filteredData == 0  ? `No dishes for ${search} founded` : 'Our Menu'  }</h1>
                        <div className='sm:grid-cols-2 sm:grid gap-6 xl:grid-cols-3'>
                            { filteredData?.map( (dish) => (
                                <Dish 
                                    key={dish._id}
                                    dish={dish}
                                />
                            ))}
                        </div>
                    </div>
                        <div 
                            onClick={ () => newDishAdded() }
                            className='bg-purple-700 w-10 fixed right-5 bottom-20 flex justify-center rounded-full h-11 items-center duration-100 ease-in-out hover:scale-125 cursor-pointer'>
                            <p className='text-3xl font-bold text-white'> <BsPlusCircle /> </p>
                        </div>
                        {
                            isVisible && (
                                <div 
                                    onClick={scrollToTop}
                                    className='bg-purple-700 w-10 fixed right-5 bottom-7 flex justify-center rounded-full h-11 items-center duration-100 ease-in-out hover:scale-125 cursor-pointer'>
                                    <p className='text-3xl font-bold text-white'> <BsArrowUp /> </p>
                                </div>
                            )
                        }
                    </>
                )}
                </div>
        </>
    )
}

export default OurMenu;