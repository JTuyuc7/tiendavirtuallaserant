import React from 'react';
import imagen from '../tempImgs/pizza.jpg';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Dish = ({ dish }) => {
    const navigation = useNavigate();
    const { id, nombre, precio, existencia, img, descripcion, categoria, cantidad } = dish;

    const editProducto = () => {
        console.log('editin data', dish)
        navigation(`edit-dish/${id}`);
    }
    return (
        <>
            <div 
                className='mb-8 md:mb-0 p-3 rounded-md shadow-2xl hover:scale-105 justify-center transition duration-150 ease-out' 
                //onClick={ () => console.log('clicked', id)}
            >
                <h2 className='text-center text-md font-semibold mb-4 mt-2'>{nombre}</h2>
                <div>
                    <img 
                        className='object-cover h-40 w-full'
                        src={imagen}  
                    />
                </div>

                <div className='mt-2'>
                    <p>{descripcion}</p>

                    <p className='mt-3'>
                        <span className='font-bold'>Precio: <span className='text-gray-500'> Q {precio}</span></span>
                    </p>

                    <p className='mt-2'>
                        <span className='font-bold'>Categoria: <span className='text-gray-500'>{categoria}</span></span>
                    </p>

                    <p className='mt-2'>
                        <span className='font-bold'>Existencia: <span className='text-gray-500'>{cantidad}</span></span>
                    </p>
                </div>

                <div className='grid grid-cols-2 gap-3 mt-4'>
                    <button
                        onClick={ () => editProducto() }
                        className='bg-blue-500 p-2 rounded-md hover:bg-blue-600 text-white font-semibold uppercase flex justify-center items-center hover:scale-105 delay-75 transition duration-100 ease-in-out'
                    >
                        Edit
                        <p className='ml-2'> <BsFillPencilFill /></p> 
                    </button>

                    <button
                        className='bg-red-600 p-2 rounded-md hover:bg-red-700 text-white font-semibold uppercase flex justify-center items-center hover:scale-105 delay-75 transition duration-100 ease-in-out'
                    >
                        Delete
                        <p className='ml-2'><BsFillTrashFill/></p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Dish;