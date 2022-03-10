import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewDishAction } from '../../services/dishesServices';
import { useDispatch, useSelector } from 'react-redux';
import Spinning from '../subcomponents/Spinning';
import bgFormimage from '../tempImgs/bgForm.jpg';

const NewDish = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const { loading } = useSelector( (state) => state.dishes )
    const [ formDish, setFormDish ] = useState({
        name: '',
        price: '',
        quantity: '',
        category: '',
        img: '',
        description: ''
    });

    const { name, price, quantity, category, img, description } = formDish;

    const handleChange = (e) => {
        setFormDish({
            ...formDish,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dishObj = {};
        dishObj.name = name;
        dishObj.price = Number(price);
        dishObj.quantity = Number(quantity);
        dishObj.category = category;
        dishObj.img = '';
        dishObj.description = description;
        dishObj.id = Math.random();

        //console.log(dishObj, 'obj to be added');
        dispatch(addNewDishAction(dishObj))
        
        setTimeout(() => {
            navigation('/');
        }, 1500)
    }

    console.log(loading, 'loadingadd')

    return(
        <>
            <div 
                className=' min-h-screen bg-cover bg-center opacity-70 bg-[url("https://cdn.pixabay.com/photo/2014/06/16/23/10/spices-370114_1280.jpg")]'
            >
                <div className='p-7 shadow-md'>
                    <h2 className='text-white font-bold text-2xl text-center uppercase'>New Dish</h2>

                    <div className='flex justify-center mt-7'>
                        <div className='w-full max-w-xl bg-white opacity-80 rounded-md p-5 shadow-3xl mb-6'>
                            <form
                                onSubmit={handleSubmit}
                            >
                                <div className='mb-4'>
                                    <label
                                        className='block text-black text-md font-bold mb-3'
                                        htmlFor="name"
                                    >Dish Name</label>
                                    <input 
                                        id="name"
                                        type="text" 
                                        placeholder='Dish name' 
                                        className='block shadow appearance-none rounded-md w-full py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-700 font-semibold placeholder-slate-700'
                                        name='name'
                                        value={name}
                                        onChange={ (e) => handleChange(e) }
                                    />
                                </div>

                                <div className='mb-4'>
                                    <label
                                        htmlFor='price'
                                        className='block text-black text-md font-bold mb-3'
                                    >Price</label>
                                    <input 
                                        id="price"
                                        type="number" 
                                        pattern="[0-9]*"
                                        min="1"
                                        className='block shadow appearance-none rounded-md w-full py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-700 font-semibold' 
                                        name='price'
                                        value={price}
                                        onChange={ (e) => handleChange(e)}
                                    />
                                </div>

                                <div className='mb-4'>
                                    <label
                                        htmlFor='quantity'
                                        className='block text-black text-md font-bold mb-3'
                                    >Quantity</label>
                                    <input 
                                        id='quantity'
                                        type="number" 
                                        min="1" 
                                        className='block shadow appearance-none rounded-md w-full py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-700 font-semibold' 
                                        name='quantity'
                                        value={quantity}
                                        onChange={ (e) => handleChange(e)}
                                    />
                                </div>

                                <div className='mb-4'>
                                    <label
                                        htmlFor='category'
                                        className='block text-black text-md font-bold mb-3'
                                    >Category</label>

                                    <select
                                        id='category'
                                        className="shadow appearance-none border-2 border-gray-700 text-center font-bold rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                        name='category'
                                        value={category}
                                        onChange={ (e) => handleChange(e)}
                                    >
                                        <option value=""> -- choose one --</option>
                                        <option value="food">Food</option>
                                        <option value="breakfast">Breakfast</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drink">Drink</option>
                                        <option value="dinner">Dinner</option>
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label>Img</label>
                                </div>

                                <div className='mb-4'>
                                    <label
                                        htmlFor='description'
                                        className='block text-black text-md font-bold mb-3'
                                    >Description</label>
                                    <textarea
                                        id='description'
                                        placeholder='Add a description'
                                        className="shadow appearance-none border-2 border-gray-700 font-bold rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                        name='description'
                                        value={description}
                                        onChange={ (e) => handleChange(e)}
                                    >

                                    </textarea>
                                </div>

                                <div>
                                <button 
                                    type="submit" 
                                    className="flex justify-center p-3 bg-purple-800 w-full rounded-md text-white font-bold uppercase cursor-pointer hover:bg-violet-900 hover:scale-105 delay-75 transition duration-100 ease-in-out">
                                    { loading ? (
                                        <>
                                            <Spinning 
                                                size='20px'
                                                width='6px'
                                                primaryColor='#6700C2'
                                                secondary='white'
                                                direction='normal'
                                                animateTiming='ease-in-out'
                                                rotation={5}
                                            />
                                            <p className='ml-3'>Saving</p>
                                        </>
                                    ): ( <p>Save</p>)}
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewDish;