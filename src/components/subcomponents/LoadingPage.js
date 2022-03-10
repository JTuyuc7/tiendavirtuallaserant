import React from 'react';

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

const RenderDivs = () => {

    return(
        <div className='bg-slate-300 rounded-md h-auto pt-3 sm:pt-1'>
            <div className='bg-slate-400 h-44 m-5 rounded-md mt-5'></div>  
            <div className='bg-slate-400 h-2 mx-5 my-3 rounded-md'></div>
            <div className='bg-slate-400 h-2 mx-5 my-3 rounded-md'></div>   
            <div className='bg-slate-400 h-2 mx-5 my-3 rounded-md w-7'></div> 
            <div className='bg-slate-400 h-2 mx-5 my-3 rounded-md w-24'></div> 

            <div className='mx-5 my-2 grid grid-cols-2 gap-2'>
                <div className='bg-slate-400 h-2 w-16 rounded-md'></div>
                <div className='bg-slate-400 h-2 w-auto rounded-md'></div>
            </div>
            <div className='mx-5 my-3 grid grid-cols-2 gap-2'>
                <div className='bg-slate-400 h-2 w-auto rounded-md'></div>
                <div className='bg-slate-400 h-2 w-14 rounded-md'></div>
            </div>

            <div className='mx-5 my-3 mb-5 grid grid-cols-2 gap-2 pb-4'>
                <div className='bg-slate-400 h-2 w-24 rounded-md'></div>
                <div className='bg-slate-400 h-2 w-auto rounded-md'></div>
            </div>
        </div>
    )
}

const LoadingPage = () => {

    return(
        <>
            <div className="border-none border-blue-800 shadow rounded-md max-w-sm w-full mx-auto min-h-screen min-w-full">
                <div className="animate-pulse flex space-x-7">
                    {/*<div class="rounded-full bg-slate-700 h-10 w-10"></div>*/}
                    <div className="flex-1 space-y-10 py-1 min-h-full">
                        <div className="h-14 bg-slate-300 rounded-md"></div>
                            <div className="space-y-5 ">
                                {/* <div class="grid grid-cols-3 gap-4"> */}
                                <div className="sm:grid-cols-2 sm:grid gap-5 xl:grid-cols-3">
                                    {/* <div class="h-2 bg-green-700 rounded"></div>
                                    <div class="h-2 bg-slate-700 rounded col-span-1"></div> */}

                                    { tempData.map( (ele, idx) => {
                                        return(
                                            <RenderDivs 
                                                key={idx}
                                            />
                                        )
                                    })}
                                </div>
                            {/* <div class="h-2 bg-slate-700 rounded"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingPage;