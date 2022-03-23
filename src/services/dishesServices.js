import { createAsyncThunk } from '@reduxjs/toolkit';
import { 
    startGettingData, 
    getDishesSuccess, 
    gettingDataError,

    // add Dish
    startAddingDish,
    addDishSuccess,
    addDishError,

    // Edit
    selectedDish,
    editDishSuccess,
    editDishError,
    startEditinDish,

    //Delete
    startDelete,
    delteDishSuccess,
    deleteDishError,

    getEspecificDish,

    clearError,
} from '../features/dishesSlice';
import Swal from 'sweetalert2';
import axiosClient from '../config/axios';

export const getAllDishesAction = createAsyncThunk(
    'getAllDishes',
    async (_, thunkApi) => {
        thunkApi.dispatch(startGettingData(true));
        try {
            const token = JSON.parse(localStorage.getItem('$token'));
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            
            const result = await axiosClient.get('/api/dishes', config);
            thunkApi.dispatch(getDishesSuccess(result.data.dishes))
        } catch (error) {
            await localStorage.removeItem('$token')
            console.log(error.response)
            thunkApi.dispatch(gettingDataError('Unable to get the Dishes'));
            Swal.fire({
                title: `${error.response.data.msg}`,
                icon: 'error',
                toast: true,
                position: 'top-end'
            }).then( (val) => {
                if(val.isConfirmed){
                    thunkApi.dispatch(clearError(''))
                }
            })
        }
    }
);

export const addNewDishAction = createAsyncThunk(
    'addNewDish',
    async (data, thunkApi ) => {
        thunkApi.dispatch(startAddingDish(true));
        try {
            const token = JSON.parse(localStorage.getItem('$token'));
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const dish = await axiosClient.post('/api/dishes', data, config);
            thunkApi.dispatch(addDishSuccess(dish.data.dish))
            
            Swal.fire(
                'Great',
                `${dish.data.msg}`,
                'success'
            )
            
        } catch (error) {
            console.log(error)
            thunkApi.dispatch(addDishError('Unable to save the dish'))
            Swal.fire({
                title: 'Something went wrong',
                text: 'DIsh could not be saved',
                icon: 'error',
                confirmButtonColor: '#3085f6',
                confirmButtonText: 'Ok, go home',
            }).then( (res) => {
                if(res.isConfirmed){
                    thunkApi.dispatch(clearError(''))
                }
            })
        }
    }
);

//Edit dish
export const editDishAction = createAsyncThunk(
    'editDish',
    async(data, thunkApi) => {
        thunkApi.dispatch(startEditinDish(true))
        try {
            const token = JSON.parse(localStorage.getItem('$token'));
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const result = await axiosClient.put(`/api/dishes/${data._id}`, data, config)
            thunkApi.dispatch(editDishSuccess(result.data.dish))
            Swal.fire(
                'Great',
                'Dish edited correctly',
                'success'
            )
            thunkApi.dispatch(selectedDish({}))
        } catch (error) {
            console.log(error);
            thunkApi.dispatch(editDishError('Unable to Edit the dish'))
            Swal.fire({
                title: 'Something went wrong',
                text: 'DIsh could not be saved',
                icon: 'error',
                confirmButtonColor: '#3085f6',
                confirmButtonText: 'Ok, go home',
            }).then( (res) => {
                if(res.isConfirmed){
                    thunkApi.dispatch(clearError(null))
                }
            })
        }
    }
)

export const deleteDishAction = createAsyncThunk(
    'deleteDish',
    async(_id, thunkApi) => {
        thunkApi.dispatch(startDelete())
        try {
            const token = JSON.parse(localStorage.getItem('$token'));
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            await axiosClient.delete(`/api/dishes/${_id}`, config)
            thunkApi.dispatch(delteDishSuccess(_id))

            Swal.fire(
                'Success',
                'Deleted correctly',
                'success'
            )
        } catch (error) {
            console.log(error)
            thunkApi.dispatch(deleteDishError('Unable to delete the dish'))
            Swal.fire({
                title: 'Something went wrong',
                text: 'DIsh could not be deleted',
                icon: 'error',
                confirmButtonColor: '#3085f6',
                confirmButtonText: 'Got it',
            }).then( (res) => {
                if(res.isConfirmed){
                    thunkApi.dispatch(clearError(null))
                }
            })
        }
    }
);

export const getEspecificDishAction = createAsyncThunk(
    'getEspecificDish',
    async (id, thunkApi) => {
        try {
            const token = JSON.parse(localStorage.getItem('$token'));
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const result = await axiosClient.get(`/api/dishes/${id}`, config);
            thunkApi.dispatch(getEspecificDish(result.data.dish))
        } catch (error) {
            console.log(error);
            thunkApi.dispatch(gettingDataError('Unable to get the dish'))
        }
    }
)