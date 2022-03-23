import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { verifyTokenPasswordAction, changePasswordAction } from '../../services/userServices';
import { tokenConfirmed } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Spinning from '../subcomponents/Spinning';
import pasImg from '../../assets/newImg.jpg';

const NewPassword = () => {
    const params = useParams();
    const navigation = useNavigate();
    const { token } = params;
    const dispatch = useDispatch();
    const { loading, isConfirmed } = useSelector( (state) => state.users );
    const verifyToken = () => {
        dispatch(verifyTokenPasswordAction(token))
    }
    useEffect(() => {
        verifyToken();
    },[]);

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: yup.object({
            password: yup.string().min(6, 'New password needs to be 6 characters').required('New password is required')
        }),
        onSubmit: (val) => {
            let objPass = { ...val };
            objPass.token = token;
            dispatch(changePasswordAction(objPass))
            formik.resetForm();
        }
    })

    const navigateToLogin = () => {
        dispatch(tokenConfirmed());
        navigation('/')
    }
    return(
        <>
            <div 
                style={{ backgroundImage: `url(${pasImg})`}}
                className='shadow-3xl rounded-xl py-8 bg-cover opacity-90'
            >
                <h2 className='text-center text-white font-bold text-xl uppercase'>Set New Password</h2>

                <form
                    onSubmit={ formik.handleSubmit }
                >
                    <div className='px-5' >

                        <div className='py-3'>
                            <label
                                htmlFor='password'
                                className='block my-2 font-bold uppercase text-white'
                            >Password</label>

                            <input 
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter new password"
                                className='block w-full shadow appearance-none rounded-md px-2 py-1 leading-tight focus:outline-none focus:shadow-outline border-2 border-gray-300 font-semibold placeholder-slate-500'
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

                        <div 
                            className='block py-3 rounded-md mt-2'
                        >
                            {
                                !isConfirmed ? (
                                    <button
                                        onClick={ () => verifyToken()}
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
                                                    <p className='ml-3'>Saving</p>
                                                </>
                                            ) : (
                                                <p>Set new Password</p>
                                            )
                                        }
                                    </button>
                                ) : (
                                    <button
                                        onClick={ () => navigateToLogin()}
                                        className='flex px-5 justify-center transition-colors rounded-xl w-full py-2 bg-purple-800 text-white font-bold uppercase hover:bg-violet-900 hover:scale-105 delay-75 duration-100 ease-in-out'
                                    >
                                        Go to Login
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewPassword;