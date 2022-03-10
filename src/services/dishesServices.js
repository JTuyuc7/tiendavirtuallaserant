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

    //Delete
    startDelete,
    delteDishSuccess,
    deleteDishError
} from '../features/dishesSlice';

export const getAllDishesAction = createAsyncThunk(
    'getAllDishes',
    async (_, thunkApi) => {
        thunkApi.dispatch(startGettingData(true));
        //console.log(_, 'data-----?')
        try {
            //thunkApi.dispatch(getDishesSuccess())
            setTimeout(() => {
                thunkApi.dispatch(getDishesSuccess())
            }, 1000)
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
            console.log(data, 'dish to be added')
            setTimeout(() => {
                thunkApi.dispatch(addDishSuccess(data))
            }, 1500)
        } catch (error) {
            console.log(error)
            thunkApi.dispatch(addDishError('Unable to save the dish'))
        }
    }
);

//Edit dish
export const editUserAction = createAsyncThunk(
    'editDish',
    async(data, thunkApi) => {
        try {
            //console.log(data.price, 'price', typeof data.price)
            thunkApi.dispatch(editDishSuccess(data))
        } catch (error) {
            console.log(error);
            thunkApi.dispatch(editDishError('Unable to Edit the dish'))
        }
    }
)

export const deleteDishAction = createAsyncThunk(
    'deleteDish',
    async(id, thunkApi) => {
        thunkApi.dispatch(startDelete())
        try {
            thunkApi.dispatch(delteDishSuccess(id))
        } catch (error) {
            console.log(error)
            thunkApi.dispatch(deleteDishError('Unable to delete the dish'))
        }
    }
)