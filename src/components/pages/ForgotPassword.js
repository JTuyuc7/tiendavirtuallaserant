import React from 'react';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { resetingPasswordAction } from '../../services/userServices';
import { useDispatch, useSelector } from 'react-redux';
import Spinning from '../subcomponents/Spinning';
import forgotImg from '../../assets/forgotImg.jpg';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const { loading, isVerified } = useSelector( (state) => state.users )
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: yup.object({
            email: yup.string().required('Email is required to reset your password')
        }),
        onSubmit: (value) => {
            //console.log(value, 'email')
            dispatch(resetingPasswordAction(value))
            formik.resetForm()
        }
    })

    return(
        <>
            <div 
                style={{ backgroundImage: `url(${forgotImg})`}}
                className='shadow-3xl rounded-xl py-8 px-4 bg-cover opacity-90'
            >
                <h2 className='text-white text-2xl uppercase font-bold text-center'>Forgot your password</h2>

            <form
                onSubmit={formik.handleSubmit}
            >
                <div className='py-2'>
                    <label
                        htmlFor='email'
                        className='block text-white uppercase font-bold py-3'
                    >Enter you email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder='Example. user@user.com'
                        className='block w-full shadow appearance-none rounded-md px-2 py-2 leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-300 font-semibold placeholder-slate-500'
                        value={ formik.values.email }
                        onChange={ formik.handleChange }
                        onBlur={ formik.handleBlur }
                    />
                </div>
                { formik.touched.email && formik.errors.email ? (
                    <div className='bg-rose-600 rounded-lg mt-3 p-1' role="alert">
                        <p className='text-white text-center font-normal text-sm'>{formik.errors.email}</p>
                    </div>
                ): null}
                <div 
                    className='block py-3 rounded-md mt-2'
                >
                    
                    {
                        !isVerified ? (
                            <button
                                type='submit'
                                className={ `flex justify-center transition-colors rounded-xl w-full py-2 bg-purple-800 text-white font-bold uppercase hover:bg-violet-900 hover:scale-105 delay-75 duration-100 ease-in-out`}
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
                                            <p className='ml-3'>Sending Instructions</p>
                                        </>
                                    ) : (
                                        <p>Send Instructions</p>
                                    )
                                }
                            </button>
                        ) : null 
                    }
                </div>
            </form>
                <div className='mx-4 flex flex-col mt-5 md:flex-row justify-between mb-4'>
                        <NavLink
                            className="text-white hover:text-blue-100 text-sm my-3 md:my-0"
                            to={'/'}
                        >Already have an account? Log in</NavLink>
                        <NavLink
                            className="text-white hover:text-blue-100 text-sm"
                            to={'/create-account'}
                        >Get an account</NavLink>
                    </div>
            </div>
        </>
    )
}

export default ForgotPassword;