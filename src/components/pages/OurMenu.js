import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dish from '../subcomponents/Dish';
import { BsArrowUp, BsPlusCircle } from 'react-icons/bs';

const tempData = [
    { id: 1, nombre: 'Producto uno', precio: 30, existencia: true, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'comida', cantidad: 3 },
    { id: 2, nombre: 'Producto dos', precio: 20, existencia: false, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'desayuno',cantidad: 12 },
    { id: 3, nombre: 'Producto tres', precio: 35, existencia: false, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'bebibda', cantidad: 19 },
    { id: 4, nombre: 'Producto cuatro', precio: 12, existencia: true, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'desayuno', cantidad: 100 },
    { id: 5, nombre: 'Producto cinco', precio: 50, existencia: false, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'bebida', cantidad: 25 },
    { id: 6, nombre: 'Producto seis', precio: 90, existencia: true, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'desayuno', cantidad: 20 },
    { id: 7, nombre: 'Producto site', precio: 100, existencia: true, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'comida', cantidad: 15 },
    { id: 8, nombre: 'Producto ocho', precio: 300, existencia: false, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'postre', cantidad: 9 }
]

const OurMenu = () => {
    const navigation = useNavigate()
    const [ isVisible, setIsVisible ] = useState(false);
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

    return(
        <>
            <div className='min-h-screen flex flex-col p-7 '>
                <div className='bg-blue-500 pt-3 pb-3'>
                    <h2>Filtro</h2>
                </div>
                <div className='mt-5 mb-5'>
                    <h1 className='text-center font-bold uppercase text-2xl mb-5'>Our Menu</h1>

                    <div className='sm:grid-cols-2 sm:grid gap-5 xl:grid-cols-3'>
                        { tempData?.map( (dish) => (
                            <Dish 
                                key={dish.id}
                                dish={dish}
                            />
                        ))}
                    </div>
                </div>
                    <div 
                        onClick={ () => navigation('/new-dish')}
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
            </div>
        </>
    )
}

export default OurMenu;