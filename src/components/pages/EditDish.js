import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { editUserAction } from '../../services/dishesServices';
import { cancelEdition } from '../../features/dishesSlice';
import { useNavigate } from 'react-router-dom';
import { BsFileExcelFill, BsSaveFill } from 'react-icons/bs';

const EditDish = () => {

    const dispatch = useDispatch();
    const navigation = useNavigate();
    const { dish } = useSelector((state) => state.dishes);

    const [ dishEdit, setEditDishData ] = useState({
        name: '',
        price: '',
        quantity: '',
        category: '',
        img: '',
        description: ''
    });

    const { name, price, quantity, category, img, description } = dishEdit;

    useEffect(() => {
        setEditDishData(dish)
    },[dish]);

    const handleDishEdit = (e) => {
        setEditDishData({
            ...dishEdit,
            [e.target.name] : e.target.value
        })
    }

    const handleCancelEdition = () => {
        dispatch(cancelEdition());
        navigation('/');
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()

        // Validacion

        const editedObj = {};

        editedObj.name = name;
        editedObj.price = Number(price);
        editedObj.quantity = Number(quantity);
        editedObj.category = category;
        editedObj.img = img;
        editedObj.description = description;
        editedObj.id = dish.id;

        //console.log(editedObj, 'new Object edited?')
        dispatch(editUserAction(editedObj))

        navigation('/');
    }

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
                                onSubmit={ handleEditSubmit }
                            >
                                <div className='mb-4'>
                                    <label
                                        className='block text-black text-md font-bold mb-3'
                                        htmlFor='name'
                                    >Dish Name</label>
                                    <input 
                                        id="name"
                                        type="text" 
                                        placeholder='Dish name' 
                                        className='block shadow appearance-none rounded-md w-full py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-700 font-semibold placeholder-slate-700'
                                        name='name'
                                        value={name}
                                        onChange={ (e) => handleDishEdit(e)}
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
                                        //pattern="[0-9]*"
                                        min="1"
                                        className='block shadow appearance-none rounded-md w-full py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-700 font-semibold' 
                                        name='price'
                                        value={price.toString()}
                                        onChange={ (e) => handleDishEdit(e)}
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
                                        value={quantity.toString()}
                                        onChange={ (e) => handleDishEdit(e)}
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
                                        onChange={ (e) => handleDishEdit(e)}
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
                                        onChange={ (e) => handleDishEdit(e)}
                                    >

                                    </textarea>
                                </div>

                                <div className='grid grid-cols-2 gap-3'>
                                    {/* <input 
                                        type="submit"
                                        value="Save"
                                        className='block p-3 bg-purple-800 w-full rounded-md text-white font-bold uppercase cursor-pointer hover:bg-violet-900 hover:scale-105 delay-75 transition duration-100 ease-in-out'
                                    /> */}
                                    {/* <button
                                        type='submit'
                                        className='block p-3 bg-purple-800 w-full rounded-md text-white font-bold uppercase cursor-pointer hover:bg-violet-900 hover:scale-105 delay-75 transition duration-100 ease-in-out'
                                    >
                                        Save
                                    </button> */}
                                    <button
                                        className='bg-gradient-to-l from-purple-900 to-purple-700 p-2 hover:from-blue-600 hover:to-blue-800 rounded-md text-white font-semibold uppercase flex justify-center items-center hover:scale-105 delay-75 transition duration-100 ease-in-out'
                                    >
                                        Save
                                        <p className='ml-2'><BsSaveFill/></p>
                                    </button>

                                    <button
                                        onClick={() => handleCancelEdition()}
                                        className='bg-gradient-to-l from-rose-600 to-rose-700 p-2 hover:from-red-600 hover:to-red-800 rounded-md text-white font-semibold uppercase flex justify-center items-center hover:scale-105 delay-75 transition duration-100 ease-in-out'
                                    >
                                        Cancel
                                        <p className='ml-2'><BsFileExcelFill/></p>
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

export default EditDish;