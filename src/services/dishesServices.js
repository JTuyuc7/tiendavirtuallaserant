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
    isEditingFunc,

    //Delete
    startDelete,
    delteDishSuccess,
    deleteDishError,

    getEspecificDish,
} from '../features/dishesSlice';
import Swal from 'sweetalert2';
import axiosClient from '../config/axios';

export const getAllDishesAction = createAsyncThunk(
    'getAllDishes',
    async (_, thunkApi) => {
        thunkApi.dispatch(startGettingData(true));
        try {
            const result = await axiosClient.get('/api/dishes');
            thunkApi.dispatch(getDishesSuccess(result.data.dishes))
        } catch (error) {
            console.log(error)
            thunkApi.dispatch(gettingDataError('Unable to get the Dishes'));
        }
    }
);

export const addNewDishAction = createAsyncThunk(
    'addNewDish',
    async (data, thunkApi ) => {
        thunkApi.dispatch(startAddingDish(true));
        try {
            const dish = await axiosClient.post('/api/dishes', data);
            console.log(dish, 'error')
            thunkApi.dispatch(addDishSuccess(dish.data.dish))
            Swal.fire(
                'Great',
                `${dish.data.msg}`,
                'success'
            )
        } catch (error) {
            console.log(error)
            thunkApi.dispatch(addDishError('Unable to save the dish'))
        }
    }
);

//Edit dish
export const editDishAction = createAsyncThunk(
    'editDish',
    async(data, thunkApi) => {
        try {
            const result = await axiosClient.put(`/api/dishes/${data._id}`, data)
            thunkApi.dispatch(editDishSuccess(result.data.dish))
            if(result.status === 200){
                thunkApi.dispatch(isEditingFunc(result.status))
            }
            thunkApi.dispatch(selectedDish({}))
        } catch (error) {
            console.log(error);
            thunkApi.dispatch(editDishError('Unable to Edit the dish'))
        }
    }
)

export const deleteDishAction = createAsyncThunk(
    'deleteDish',
    async(_id, thunkApi) => {
        thunkApi.dispatch(startDelete())
        try {
            await axiosClient.delete(`/api/dishes/${_id}`)
            thunkApi.dispatch(delteDishSuccess(_id))
        } catch (error) {
            console.log(error)
            thunkApi.dispatch(deleteDishError('Unable to delete the dish'))
        }
    }
);

export const getEspecificDishAction = createAsyncThunk(
    'getEspecificDish',
    async (id, thunkApi) => {

        try {
            const result = await axiosClient.get(`/api/dishes/${id}`);
            thunkApi.dispatch(getEspecificDish(result.data.dish))
        } catch (error) {
            console.log(error);
            thunkApi.dispatch(gettingDataError('Unable to get the dish'))
        }
    }
)