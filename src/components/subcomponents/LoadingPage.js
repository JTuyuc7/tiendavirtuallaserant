import React from 'react';

const tempData = [
    { id: 1, },
    { id: 2, },
    { id: 3, },
    { id: 4, },
    { id: 5, },
    { id: 6, },
    { id: 7, },
    { id: 8, }
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
                    <div className="flex-1 space-y-10 py-1 min-h-full">
                        <div className="h-14 bg-slate-300 rounded-md"></div>
                            <div className="space-y-5 ">
                                <div className="sm:grid-cols-2 sm:grid gap-5 xl:grid-cols-3">
                                    { tempData.map( (ele, idx) => {
                                        return(
                                            <RenderDivs 
                                                key={idx}
                                            />
                                        )
                                    })}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingPage;