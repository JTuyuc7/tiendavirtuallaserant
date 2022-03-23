import React from 'react';
import { useSelector } from 'react-redux';
import { BsPersonCircle } from 'react-icons/bs';

const Profile = () => {

    const { user } = useSelector( (state) => state.users );
    const { firstName, lastName, email, created } = user;
    let date = new Date(created).toLocaleDateString('en-DO', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    return(
        <>
            <div className='min-h-fit p-5 flex justify-center'>
                <div className='mt-0 bg-slate-200 md:mt-10 md:w-2/3 w-full p-5 rounded-xl shadow-3xl pb-10'>
                    <h2 className='text-black uppercase font-bold'>My account</h2>

                    <div className='bg-purple-300 rounded-lg p-3 mt-3 pb-5'>
                        <div className='flex justify-between flex-row'>
                            <div >
                                <p
                                    style={{ fontSize: 65}}
                                > <BsPersonCircle/> </p>
                            </div>

                            <button
                                className='bg-gradient-to-l px-5 from-purple-900 to-purple-700 hover:from-blue-600 hover:to-blue-800 rounded-md text-white font-semibold uppercase hover:scale-105 delay-75 transition duration-100 ease-in-out'
                            >Edit data</button>
                        </div>
                        <div className='mt-5'>
                            <h3 className='uppercase font-semibold text-gray-700'>User Name</h3>

                            <p className='font-medium ml-2'>{`${firstName} ${lastName}`}</p>
                        </div>
                        
                        <div className='mt-3'>
                            <h3 className='uppercase font-semibold text-gray-700'>User Email</h3>
                            <p className='font-medium ml-2'>{email}</p>
                        </div>

                        <div className='mt-3'>
                            <h3 className='uppercase font-semibold text-gray-700'>User created at</h3>
                            <p className='font-medium ml-2'>{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;