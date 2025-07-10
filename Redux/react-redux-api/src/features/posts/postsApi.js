import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query({ query: () => 'posts', providesTags: ['Posts'] }),
        getPost: builder.query({ query: (id) => `posts/${id}` }),
        getPostComments: builder.query({ query: (id) => `posts/${id}/comments` }),
        getCommentsByPostId: builder.query({ query: (id) => `comments?postId=${id}` }),

        createPost: builder.mutation({
            query: (newPost) => ({ url: 'posts', method: 'POST', body: newPost }),
            invalidatesTags: ['Posts'],
        }),
        updatePost: builder.mutation({
            query: ({ id, ...data }) => ({ url: `posts/${id}`, method: 'PUT', body: data }),
            invalidatesTags: ['Posts'],
        }),
        patchPost: builder.mutation({
            query: ({ id, ...data }) => ({ url: `posts/${id}`, method: 'PATCH', body: data }),
            invalidatesTags: ['Posts'],
        }),
        deletePost: builder.mutation({
            query: (id) => ({ url: `posts/${id}`, method: 'DELETE' }),
            invalidatesTags: ['Posts'],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useGetPostCommentsQuery,
    useGetCommentsByPostIdQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    usePatchPostMutation,
    useDeletePostMutation,
} = postsApi;
