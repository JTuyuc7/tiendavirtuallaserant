import { createSlice } from '@reduxjs/toolkit';

/* const tempData = [
    { id: 1, nombre: 'Producto uno', precio: 30, existencia: true, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'comida', cantidad: 3 },
    { id: 2, nombre: 'Producto dos', precio: 20, existencia: false, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'desayuno',cantidad: 12 },
    { id: 3, nombre: 'Producto tres', precio: 35, existencia: false, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'bebibda', cantidad: 19 },
    { id: 4, nombre: 'Producto cuatro', precio: 12, existencia: true, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'desayuno', cantidad: 100 },
    { id: 5, nombre: 'Producto cinco', precio: 50, existencia: false, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'bebida', cantidad: 25 },
    { id: 6, nombre: 'Producto seis', precio: 90, existencia: true, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'desayuno', cantidad: 20 },
    { id: 7, nombre: 'Producto site', precio: 100, existencia: true, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'comida', cantidad: 15 },
    { id: 8, nombre: 'Producto ocho', precio: 300, existencia: false, img: '', descripcion: 'esta es una pequeña descripcion del platillo creado', categoria: 'postre', cantidad: 9 }
]

const tempTest = []; */

const initialState = {
    dishes: [],
    dish: {},
    loading: null,
    error: null,
    message: '',
    idDelete: null,
    imgEdited: ''
}

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {
        startGettingData: (state, action) => {
            state.loading = action.payload
        },
        getDishesSuccess: (state, action) => {
            state.dishes = state.dishes
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
            state.dishes = [action.payload, ...state.dishes]
        },
        addDishError: (state, action) => {
            state.error = action.payload
            state.error = action.payload
        },
        selectedDish: (state, action) => {
            state.dish = action.payload
        },
        editDishSuccess: (state, action) => {
            //state.dish = {}
            state.dishes = state.dishes.map( (ele) => ele.id === action.payload.id ? action.payload : ele )
            //state.dish = null
        },
        editDishError: (state, action) => {
            state.error = action.payload
        },
        cancelEdition: (state, action) => {
            state.dish = {}
        },
        getIdDelete: (state, action) => {
            state.idDelete = action.payload
        },
        startDelete: (state, action) => {
            state.loading = true
        },
        delteDishSuccess: (state, action) => {
            state.dishes = state.dishes.filter( (ele) => ele.id !== action.payload )
            state.idDelete = null
            state.loading = null
        },
        deleteDishError: (state, action) => {
            state.message = action.payload
        },
        selectedImg: (state, action) => {
            state.imgEdited = action.payload
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

    //Delete
    getIdDelete,
    startDelete,
    delteDishSuccess,
    deleteDishError,

    //Selec img
    selectedImg,
    
} = dishesSlice.actions;
export default dishesSlice.reducer;