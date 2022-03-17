import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dishes: [],
    dish: {},
    loading: null,
    error: null,
    message: '',
    idDelete: null,
    imgEdited: '',
    isEditing: null,
    reqStatus: null,
    dishFromDb: {}
}

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        startGettingData: (state, action) => {
            state.loading = action.payload
        },
        getDishesSuccess: (state, action) => {
            state.dishes = action.payload
            state.loading = false
        },
        gettingDataError: (state, action) => {
            state.loading = false
            state.error = true
            state.error = action.payload
        },
        startAddingDish: (state, action) => {
            state.loading = action.payload
        },
        addDishSuccess: (state, action) => {
            state.loading = false
            state.dishes = [...state.dishes, action.payload ]
        },
        addDishError: (state, action) => {
            state.error = action.payload
        },
        selectedDish: (state, action) => {
            state.dish = action.payload
        },
        isEditingFunc: (state, action) => {
            state.reqStatus = action.payload
        },
        editDishSuccess: (state, action) => {
            //state.dish = {}
            state.dishes = state.dishes.map( (ele) => ele._id === action.payload._id ? action.payload : ele )
            state.isEditing = false
        },
        editDishError: (state, action) => {
            state.error = action.payload
            state.isEditing = action.payload
        },
        cancelEdition: (state, action) => {
            state.dish = {}
        },
        getIdDelete: (state, action) => {
            state.idDelete = action.payload
        },
        startDelete: (state, action) => {
            //state.loading = true
        },
        delteDishSuccess: (state, action) => {
            state.dishes = state.dishes.filter( (ele) => ele._id !== action.payload )
            state.idDelete = null
            //state.loading = null
        },
        deleteDishError: (state, action) => {
            state.message = action.payload
        },
        selectedImg: (state, action) => {
            state.imgEdited = action.payload
        },

        // Get the especifc dish by ID
        getEspecificDish: (state, action) => {
            state.dishFromDb = action.payload;
        }
    }
});

export const { 
    startGettingData, 
    getDishesSuccess, 
    gettingDataError,

    //add new dish
    startAddingDish,
    addDishSuccess,
    addDishError,

    //Edit dish
    selectedDish,
    editDishSuccess,
    editDishError,
    cancelEdition,
    isEditingFunc,

    //Delete
    getIdDelete,
    startDelete,
    delteDishSuccess,
    deleteDishError,

    //Selec img
    selectedImg,
    
    // Get An especific dish
    getEspecificDish,
    
} = dishesSlice.actions;
export default dishesSlice.reducer;