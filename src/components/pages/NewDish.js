import React from 'react';
//import bgFormimage from '../tempImgs/bgForm.jpg';

const NewDish = () => {

    return(

        <>
            <div 
                className=' min-h-screen bg-cover bg-center opacity-70 bg-[url("https://cdn.pixabay.com/photo/2014/06/16/23/10/spices-370114_1280.jpg")]'
            >
                <div className='p-7 shadow-md'>
                    <h2 className='text-white font-bold text-2xl text-center uppercase'>New Dish</h2>

                    <div className='flex justify-center mt-7'>
                        <div className='w-full max-w-xl bg-white opacity-80 rounded-md p-5 shadow-3xl mb-6'>
                            <form>
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
                                    >

                                    </textarea>
                                </div>

                                <div>
                                    <input 
                                        type="submit"
                                        value="Save"
                                        className='block p-3 bg-purple-800 w-full rounded-md text-white font-bold uppercase cursor-pointer hover:bg-violet-900 hover:scale-105 delay-75 transition duration-100 ease-in-out'
                                    />
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