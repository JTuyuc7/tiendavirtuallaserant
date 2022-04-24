import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { resetLinkPass } from '../../features/userSlice';
import { loggingUserAction} from '../../services/userServices';
import { useDispatch, useSelector } from 'react-redux';
import Spinning from '../subcomponents/Spinning';
import { useAuthvalidation } from '../hooks/useAuth';
import loginImg from '../../assets/loginImg.jpg';

const Login = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const { loading, token } = useSelector( (state) => state.users );
    const { tokenStorage, getUsersInfo } = useAuthvalidation();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string().required('Email is required'),
            password: yup.string().required('Password is required')
        }),
        onSubmit: (user) => {
            dispatch(loggingUserAction(user));
            formik.resetForm()
        }
    });

    if(token !== ''){
        localStorage.setItem('$token', JSON.stringify(token))
        navigation('/dishes')
    }
    useEffect(() => {
        if(!tokenStorage){
            return;
        }
        getUsersInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const resetLink = () => {
        dispatch(resetLinkPass())
    }

    return(
        <>
            <div
                style={{ backgroundImage: `url(${loginImg})`}} 
                className='rounded-xl shadow-3xl items-center p-4 opacity-90 bg-cover'
            >
                <h1 className='text-white text-center font-bold text-2xl uppercase mt-5'>Log In</h1>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='w-full px-4 my-4'>
                            <label
                                htmlFor='email'
                                className='block w-full text-white font-bold mb-3'
                            >Email</label>
                            <input
                                id='email'
                                name="email"
                                type="text"
                                placeholder="Email"
                                className='block w-full shadow appearance-none rounded-md px-2 py-1 leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-300 font-semibold placeholder-slate-500'
                                value={ formik.values.email }
                                onChange={ formik.handleChange }
                                onBlur={ formik.handleBlur }
                            />
                        </div>
                        { formik.touched.email && formik.errors.email ? (
                            <div className='bg-red-700 rounded-lg mb-4 p-2 mx-4' role="alert">
                                <p className='text-white text-center font-bold'>Opps!! {formik.errors.email}</p>
                            </div>
                        ): null}

                        <div className='w-full px-4 my-4'>
                            <label
                                htmlFor='password'
                                className='block w-full text-white font-bold mb-3'
                            >Password</label>
                            <input
                                id='password'
                                name="password"
                                type="password"
                                placeholder="Password"
                                className='block w-full shadow appearance-none rounded-md px-2 py-1 leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-300 font-semibold placeholder-slate-500'
                                value={ formik.values.password }
                                onChange={ formik.handleChange }
                                onBlur={ formik.handleBlur }
                            />
                        </div>
                        { formik.touched.password && formik.errors.password ? (
                            <div className='bg-red-700 rounded-lg mb-4 p-2 mx-4' role="alert">
                                <p className='text-white text-center font-bold'>Opps!! {formik.errors.password}</p>
                            </div>
                        ): null}

                        <div 
                            className='block mx-4 my-5 rounded-md'
                        >
                            <button
                                type='submit'
                                className='flex justify-center transition-colors rounded-xl w-full py-2 bg-purple-800 text-white font-bold uppercase hover:bg-violet-900 hover:scale-105 delay-75 duration-100 ease-in-out'
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
                                            <p className='ml-3'>Logging</p>
                                        </>
                                    ) : (
                                        <p>Log in</p>
                                    )
                                }
                            </button>
                        </div>
                    </form>
                    <div className='mx-4 flex flex-col md:flex-row justify-between mb-4'>
                        <NavLink
                            onClick={ () => resetLink() }
                            className="text-white hover:text-blue-100 text-sm my-3 md:my-0"
                            to={'/forgot-password'}
                        >Forgot your password?</NavLink>
                        <NavLink
                            className="text-white hover:text-blue-100 text-sm"
                            to={'/create-account'}
                        >Get an account</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
