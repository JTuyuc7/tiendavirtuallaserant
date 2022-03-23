import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from '../features/dishesSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
    reducer: {
        dishes: dishesReducer,
        users: userReducer
    }
})