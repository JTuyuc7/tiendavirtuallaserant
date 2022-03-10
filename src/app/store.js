import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from '../features/dishesSlice';

export const store = configureStore({
    reducer: {
        dishes: dishesReducer
    }
})