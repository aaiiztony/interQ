import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

//creating a constant to store headers for the api
const articleApiHeaders = {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
};

//creating a callback function to easily trigger the endpoints
const createRequest= (url)=> ({url, headers: articleApiHeaders});

//creating a variable to store base url of the api
const baseUrl = import.meta.env.VITE_BASE_URL;


//creating the main hook using the baseURL, headers, createRequest function & createApi hook
export const summaryApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        // summarize articles
        getSummary: builder.query({
            query: (params)=> createRequest(`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`)
        }),
       
    })
})

//destructuring to get the custom LAZ hook for the data fetching
export const {
    useLazyGetSummaryQuery,
} = summaryApi;