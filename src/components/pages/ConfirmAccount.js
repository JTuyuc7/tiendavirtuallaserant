import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { confirmAccountAction } from '../../services/userServices';
import { tokenConfirmed } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinning from '../subcomponents/Spinning';
import confirmImg from '../../assets/confirmAccount.webp';

const ConfirmAccount = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigation = useNavigate()
    const { token } = params;
    const { loading, isNavigate } = useSelector( (state) => state.users )

    const confirmAccount = () => {
        dispatch(confirmAccountAction(token));
    }

    const navigateToLogin = () => {
        dispatch(tokenConfirmed());
        navigation('/')
    }

    return(
        <>
            <div 
                style={{ backgroundImage: `url(${confirmImg})`}}
                className='shadow-3xl rounded-xl py-8 px-8 bg-cover opacity-90'
            >
                <h2 className='text-center text-white font-bold text-xl uppercase'>Confirm your account</h2>

                    <div className='px-5' >
                        <div 
                            className='block py-3 rounded-md mt-2'
                        >
                            {
                                isNavigate ? (
                                    <button
                                        onClick={ () => navigateToLogin()}
                                        className='flex px-5 justify-center transition-colors rounded-xl w-full py-2 bg-purple-800 text-white font-bold uppercase hover:bg-violet-900 hover:scale-105 delay-75 duration-100 ease-in-out'
                                    >
                                        Go to Login
                                    </button>
                                ) : (
                                    <button
                                        onClick={ () => confirmAccount()}
                                        type='submit'
                                        className='flex px-5 justify-center transition-colors rounded-xl w-full py-2 bg-purple-800 text-white font-bold uppercase hover:bg-violet-900 hover:scale-105 delay-75 duration-100 ease-in-out'
                                    >
                                        {
                                            loading ? (
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
                                                    <p className='ml-3'>Confirming</p>
                                                </>
                                            ) : (
                                                <p>Confirm your account</p>
                                            )
                                        }
                                    </button>
                                )
                            }
                            
                        </div>
                    </div>
            </div>
        </>
    )
}

export default ConfirmAccount;