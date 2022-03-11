import React from 'react';
import imagen from '../tempImgs/pizza.jpg';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { deleteDishAction } from '../../services/dishesServices';
import { selectedDish, getIdDelete, selectedImg } from '../../features/dishesSlice';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const Dish = ({ dish }) => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const { id, name, price, existencia, img, description, category, quantity } = dish;

    const editProducto = () => {
        //console.log('editin data', dish)
        dispatch(selectedDish(dish))
        //dispatch(selectedImg(img))
        dispatch(selectedImg('https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_1280.jpg'))
        navigation(`edit-dish/${id}`);
    }

    const handleDelete = () => {
        dispatch(getIdDelete(id))
        Swal.fire({
            title: 'Do you really want to delete?',
            text: 'Oce deleted it can not be restored',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085f6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete',
            cancelButtonText: 'Cancel'
        }).then( (res) => {
            if(res.isConfirmed){
                dispatch(deleteDishAction(id))
            }
        })
    }
    return (
        <>
            <div 
                className='mb-8 md:mb-0 p-3 rounded-md shadow-2xl shadow-gray-500 hover:scale-105 justify-center transition duration-150 ease-out' 
                //onClick={ () => console.log('clicked', id)}
            >
                <h2 className='text-center text-md font-semibold mb-4 mt-2'>{name}</h2>
                <div>
                    <img 
                        className='object-cover h-40 w-full'
                        src={img}  
                    />
                </div>

                <div className='mt-2'>
                    <p>{description}</p>

                    <p className='mt-3'>
                        <span className='font-bold'>Price: <span className='text-gray-500'> Q {price}</span></span>
                    </p>

                    <p className='mt-2'>
                        <span className='font-bold'>Category: <span className='text-gray-500'>{category}</span></span>
                    </p>

                    <p className='mt-2'>
                        <span className='font-bold'>Quantity: <span className='text-gray-500'>{quantity}</span></span>
                    </p>
                </div>

                <div className='grid grid-cols-2 gap-3 mt-4'>
                    <button
                        onClick={ () => editProducto() }
                        className='bg-gradient-to-l from-blue-400 to-blue-500 hover:from-green-500 hover:to-green-700 font-semibold uppercase flex justify-center items-center hover:scale-105 delay-75 transition duration-100 ease-in-out text-white rounded-md'
                    >
                        Edit
                        <p className='ml-2'> <BsFillPencilFill /></p> 
                    </button>

                    <button
                        onClick={() => handleDelete()}
                        className='bg-gradient-to-l from-rose-600 to-rose-700 p-2 hover:from-red-600 hover:to-red-800 rounded-md text-white font-semibold uppercase flex justify-center items-center hover:scale-105 delay-75 transition duration-100 ease-in-out'
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