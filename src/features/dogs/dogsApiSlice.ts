import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'live_hP1X4pLy7ZNYGWJJ647hX7RfsiVpfK87fa3gokeZG9M82ZXgdNvN0VcFD6CiUkE0';

interface Breed {
    id: string;
    name: string;
    image: {
        url: string;
    }
}

export const dogsApiSlice = createApi({
    reducerPath: 'api', // where we are keeping data
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', API_KEY);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getBreeds: builder.query<Breed[], number | void>({
            query(limit = 5) {
                return `/breeds?limit=${limit}`
            }
        })
    })
})


export const { useGetBreedsQuery } = dogsApiSlice;

