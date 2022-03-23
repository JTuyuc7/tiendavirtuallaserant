import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { createUserAction } from '../../services/userServices';
import { resetLinkPass } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Spinning from '../subcomponents/Spinning';
import createImg from '../../assets/createAccount.jpg';

const CreateAccount = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector( (state) => state.users );
    const [ confirmPass, setConfirmPass ] = useState('');
    const [ alert, setAlert ] = useState(false);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            firstName: yup.string().required('Name is required'),
            lastName: yup.string().required('Last name is required'),
            email: yup.string().email('Enter a valid email').required('Email is required'),
            password: yup.string().min(6, 'Password needs to be 6 charactes').required('Password is required')
        }),
        onSubmit: (user) => {

            if( user.password !== confirmPass ){
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                }, 2000)
                return;
            }
            
            dispatch( createUserAction(user));
            setConfirmPass('');
            formik.resetForm()
        }
    })

    const resetLink = () => {
        dispatch(resetLinkPass())
    }

    return(
        <>
            <div 
                style={{ backgroundImage: `url(${createImg})` }}
                className='shadow-3xl rounded-xl py-10 bg-cover opacity-90'
            >
                <h2 className='text-center text-white font-bold text-xl uppercase'>Create account</h2>

                <form onSubmit={ formik.handleSubmit }>
                    <div className='px-5' >
                        <div className='py-2 grid grid-cols-2 gap-3'>
                            <div>
                                <div>
                                    <label
                                        htmlFor='firstName'
                                        className='block my-2 font-bold uppercase text-white'
                                    >Name</label>

                                    <input 
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        placeholder="Name"
                                        className={`block w-full shadow appearance-none rounded-md px-2 py-1 leading-tight focus:outline-none focus:shadow-outline border-2 font-semibold placeholder-slate-500 ${formik.touched.name && formik.errors.name ? 'border-rose-500 border-2' : 'border-gray-300'} `}
                                        value={ formik.values.firstName }
                                        onChange={ formik.handleChange }
                                        onBlur={ formik.handleBlur }
                                    />
                                </div>

                                { formik.touched.firstName && formik.errors.firstName ? (
                                    <div className='bg-rose-600 rounded-lg mt-3 p-1' role="alert">
                                        <p className='text-white text-center font-normal text-sm'>{formik.errors.firstName}</p>
                                    </div>
                                ): null}
                            </div>
                            
                            <div>
                                <div>
                                    <label
                                        htmlFor='lastName'
                                        className='block my-2 font-bold uppercase text-white'
                                    >Last Name</label>

                                    <input 
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        className={`block w-full shadow appearance-none rounded-md px-2 py-1 leading-tight focus:outline-none focus:shadow-outline border-2 font-semibold placeholder-slate-500 ${formik.touched.email && formik.errors.email ? 'border-rose-500 border-2' : 'border-gray-300'} `}
                                        value={ formik.values.lastName }
                                        onChange={ formik.handleChange }
                                        onBlur={ formik.handleBlur }
                                    />
                                </div>
                                { formik.touched.lastName && formik.errors.lastName ? (
                                    <div className='bg-rose-600 rounded-lg mt-3 p-1' role="alert">
                                        <p className='text-white text-center font-normal text-sm'>{formik.errors.lastName}</p>
                                    </div>
                                ): null}
                            </div>
                        </div>

                        <div className='py-3'>
                            <label
                                htmlFor='lastName'
                                className='block my-2 font-bold uppercase text-white'
                            >Email</label>

                            <input 
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Email"
                                className={`block w-full shadow appearance-none rounded-md px-2 py-1 leading-tight focus:outline-none focus:shadow-outline border-2 font-semibold placeholder-slate-500 ${formik.touched.email && formik.errors.email ? 'border-rose-500 border-2' : 'border-gray-300'} `}
                                value={ formik.values.email }
                                onChange={ formik.handleChange }
                                onBlur={ formik.handleBlur }
                            />
                        </div>
                        { formik.touched.email && formik.errors.emal ? (
                            <div className='bg-rose-600 rounded-lg mt-3 p-1' role="alert">
                                <p className='text-white text-center font-normal text-sm'>{formik.errors.email}</p>
                            </div>
                        ): null}

                        <div className='py-3'>
                            <label
                                htmlFor='password'
                                className='block my-2 font-bold uppercase text-white'
                            >Password</label>

                            <input 
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={`block w-full shadow appearance-none rounded-md px-2 py-1 leading-tight focus:outline-none focus:shadow-outline border-2 font-semibold placeholder-slate-500 ${formik.touched.password && formik.errors.password ? 'border-rose-500 border-2' : 'border-gray-300'} `}
                                value={ formik.values.password }
                                onChange={ formik.handleChange }
                                onBlur={ formik.handleBlur }
                            />
                        </div>
                        { formik.touched.password && formik.errors.password ? (
                            <div className='bg-rose-600 rounded-lg mt-3 p-1' role="alert">
                                <p className='text-white text-center font-normal text-sm'>{formik.errors.password}</p>
                            </div>
                        ): null}

                        <div className='py-3'>
                            <label
                                htmlFor='confirmPassword'
                                className='block my-2 font-bold uppercase text-white'
                            >Confirm Password</label>

                            <input 
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm pasword"
                                className='block w-full shadow appearance-none rounded-md px-2 py-1 leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-300 font-semibold placeholder-slate-500'
                                value={ confirmPass }
                                onChange={ e => setConfirmPass(e.target.value)}
                            />
                        </div>
                        { 
                            alert && (
                                <div className='bg-rose-600 rounded-lg mt-3 p-1' role="alert">
                                <p className='text-white text-center font-normal text-sm'>Password are not equal</p>
                            </div>
                            )
                        }

                        <div 
                            className='block py-3 rounded-md mt-2'
                        >
                            <button
                                type='submit'
                                className=' flex justify-center transition-colors rounded-xl w-full py-2 bg-purple-800 text-white font-bold uppercase hover:bg-violet-900 hover:scale-105 delay-75 duration-100 ease-in-out'
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
                                            <p className='ml-3'>Creating</p>
                                        </>
                                    ) : (
                                        <p>Create Account</p>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </form>
                <div className='mx-4 flex flex-col md:flex-row justify-between mt-4'>
                    <NavLink
                        className="text-white hover:text-blue-100 text-sm my-3 md:my-0"
                        to={'/'}
                    >Already have an account? Log in</NavLink>
                    <NavLink
                        onClick={ () => resetLink() }
                        className="text-white hover:text-blue-100 text-sm"
                        to={'/forgot-password'}
                    >Forgot your password?</NavLink>
                </div>
            </div>
        </>
    )
}

export default CreateAccount;