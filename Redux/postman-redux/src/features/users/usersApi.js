// File: src/features/users/usersApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }), // or your actual base URL
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => 'users',
            providesTags: ['Users'],
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: 'users',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Users'],
        }),
        updateUser: builder.mutation({
            query: ({ id, ...user }) => ({
                url: `users/${id}`,
                method: 'PUT',
                body: user,
            }),
            invalidatesTags: ['Users'],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users'],
        }),
    }),
});

export const {
    useGetAllUsersQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = usersApi;
