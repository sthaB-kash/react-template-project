import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.escuelajs.co/api/v1/auth/'}),
  endpoints: (builder) => ({
    login: builder.mutation({
        query: (credentials) => {
            console.log(credentials);
            return ({
            url: 'login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'john@mail.com',
                password: 'changeme',
            }),
        })},
    })
  }),
});

export const { useLoginMutation } = authApi;