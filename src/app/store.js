import { configureStore } from "@reduxjs/toolkit";
import {unsplashApi} from '../services/Unsplash'

// adding the unsplashApi hook as the reducer
export default configureStore({
    reducer:{[unsplashApi.reducerPath]: unsplashApi.reducer},
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(unsplashApi.middleware)
})