import { configureStore } from "@reduxjs/toolkit";
 import counterReducer from './counterSlice';
 import userSlice from './userSlice';
const store=configureStore({
    reducer:{
        counter:counterReducer,
        users:userSlice
    }
})

export default store;