import { configureStore } from "@reduxjs/toolkit";
import {summaryApi} from '../services/Article'
// adding the cryptoApi hook as the reducer
export default configureStore({
    reducer:{[summaryApi.reducerPath]: summaryApi.reducer},
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(summaryApi.middleware)
})