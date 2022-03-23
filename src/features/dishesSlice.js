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
    dishFromDb: {},
    addingStatus: null,
    editingStatus: null,
    pageSelected: 'dishes'
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
            //state.error = true
            state.error = action.payload
        },
        // Add new Dish
        startAddingDish: (state, action) => {
            state.addingStatus = action.payload
        },
        addDishSuccess: (state, action) => {
            state.addingStatus = false
            state.dishes = [...state.dishes, action.payload ]
        },
        addDishError: (state, action) => {
            state.addingStatus = null
            state.error = action.payload
        },
        selectedDish: (state, action) => {
            state.dish = action.payload
        },
        startEditinDish: (state, action) => {
            state.editingStatus = action.payload
        },
        editDishSuccess: (state, action) => {
            //state.dish = {}
            state.dishes = state.dishes.map( (ele) => ele._id === action.payload._id ? action.payload : ele )
            state.editingStatus = false
        },
        editDishError: (state, action) => {
            state.error = action.payload
            state.editingStatus = false
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
        },

        clearError: (state, action) => {
            state.error = action.payload
            state.loading = null
            state.editingStatus = null
            state.message = ''
        },
        selectPage: (state, action) => {
            state.pageSelected = action.payload
        },
        clearDishesSlice: (state, action) => {
            state.dishes = []
            state.dish = {}
            state.loading = null
            state.error = null
            state.message = ''
            state.idDelete = null
            state.imgEdited = ''
            state.isEditing = null
            state.dishFromDb = {}
            state.addingStatus = null
            state.editingStatus = null
            state.pageSelected = 'dishes'
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
    startEditinDish,

    //Delete
    getIdDelete,
    startDelete,
    delteDishSuccess,
    deleteDishError,

    //Selec img
    selectedImg,
    
    // Get An especific dish
    getEspecificDish,

    clearError,
    selectPage,
    clearDishesSlice
} = dishesSlice.actions;
export default dishesSlice.reducer;