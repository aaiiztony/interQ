import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const unsplashApiHeaders = {
    //add Client-ID prefix before accesss key
    Authorization : `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
}

const createRequest = (url) => ({url, headers : unsplashApiHeaders,
})

const baseUrl = import.meta.env.VITE_BASE_URL;

export const unsplashApi = createApi({
    reducerPath:'unsplashApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) =>({
        getImages : builder.query({
            query : () => createRequest('/photos/random?query=coding')
        })
    }),
      // global error handler
    onQueryError: (error, query) => {
    console.error(`[Error ${query.operation.path}]: ${error.message}`);
  },
})

export const {
    useGetImagesQuery
} = unsplashApi;