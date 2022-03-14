import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewDishAction } from '../../services/dishesServices';
import { useDispatch, useSelector } from 'react-redux';
import Spinning from '../subcomponents/Spinning';
import { useUpload } from '../hooks/useUploadImage';
import ImageUpload from '../subcomponents/UploadImage';

// Validation
import * as yup from 'yup';
import { useFormik } from 'formik';

const NewDish = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const { loading } = useSelector( (state) => state.dishes );

    const { upload, progress, imgUrl, imgError, progresImg, handleProgress, handleUploadStart, handleUploadError, handleUploadSuccess  } = useUpload();
    const [ tempImg, setTempImg ] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            category: '',
            description: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(3, 'Dish name needs to be large').required('Dish name is required'),
            price: yup.number().min(1, 'Add a valid Price').required('Price is required'),
            quantity: yup.number().min(1, 'Add a valid quantity for the dish').required('Quantity is required'),
            category: yup.string().required('Select a category'),
            description: yup.string().required('Add a description for the dish')
        }),
        onSubmit: (dish) => {
            
            if( !imgUrl ){
                setTempImg(true);
                setTimeout(() => {
                    setTempImg(false);
                }, 1500)
                return;
            }
            
            if( imgUrl ){
                let dishObj = {...dish};
                //dishObj.img = 'https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_1280.jpg';
                dishObj.img = imgUrl;
                dispatch(addNewDishAction(dishObj));
                
            }

            setTimeout(() => {
                navigation('/');
            }, 1500)
            
        }
    })


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
                                onSubmit={formik.handleSubmit}
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
                                        value={formik.values.name}
                                        onChange={ formik.handleChange }
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                { formik.touched.name && formik.errors.name ? (
                                    <div className='bg-red-700 rounded-lg mb-4 p-2' role="alert">
                                        <p className='text-white text-center font-bold'>Opps!! {formik.errors.name}</p>
                                    </div>
                                ): null}

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
                                        value={ formik.values.price }
                                        onChange={ formik.handleChange }
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                { formik.touched.price && formik.errors.price ? (
                                    <div className='bg-red-700 rounded-lg mb-4 p-2' role="alert">
                                        <p className='text-white text-center font-bold'>Opps!! {formik.errors.price}</p>
                                    </div>
                                ): null }

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
                                        value={formik.values.quantity}
                                        onChange={ formik.handleChange }
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                { formik.touched.quantity && formik.errors.quantity ? (
                                    <div className='bg-red-700 rounded-lg mb-4 p-2' role="alert">
                                        <p className='text-white text-center font-bold'>Opps!! {formik.errors.quantity}</p>
                                    </div>
                                ): null }

                                <div className='mb-4'>
                                    <label
                                        htmlFor='category'
                                        className='block text-black text-md font-bold mb-3'
                                    >Category</label>

                                    <select
                                        id='category'
                                        className="shadow appearance-none border-2 border-gray-700 text-center font-bold rounded-md w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                        name='category'
                                        value={formik.values.category}
                                        onChange={ formik.handleChange }
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value=""> -- Select a category --</option>
                                        <option value="food">Food</option>
                                        <option value="breakfast">Breakfast</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drink">Drink</option>
                                        <option value="dinner">Dinner</option>
                                    </select>
                                </div>
                                { formik.touched.category && formik.errors.category ? (
                                    <div className='bg-red-700 rounded-lg mb-4 p-2' role="alert">
                                        <p className='text-white text-center font-bold'>Opps!! {formik.errors.category}</p>
                                    </div>
                                ): null }
                                <div className='mb-4'>
                                    <ImageUpload 
                                        onUploadStart={handleUploadStart}
                                        onUploadError={handleUploadError}
                                        onUploadSuccess={handleUploadSuccess}
                                        onProgress={handleProgress}
                                        upload={upload}
                                        progress={progress}
                                        url={imgUrl}
                                        error={imgError}
                                        progressImg={progresImg}
                                        
                                    />
                                </div>
                                { tempImg ? (
                                    <div className='bg-red-700 rounded-lg mb-4 p-2' role="alert">
                                        <p className='text-white text-center font-bold'>Opps!! Image is required</p>
                                    </div>
                                ): null }

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
                                        value={formik.values.description}
                                        onChange={ formik.handleChange }
                                        onBlur={formik.handleBlur}
                                    >
                                    </textarea>
                                </div>
                                { formik.touched.description && formik.errors.description ? (
                                    <div className='bg-red-700 rounded-lg mb-4 p-2' role="alert">
                                        <p className='text-white text-center font-bold'>Opps!! {formik.errors.description}</p>
                                    </div>
                                ): null }

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