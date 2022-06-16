// reducerpath:reducer path aik unique key hota hai jo define karta hii k redux
// store cache ko kaha pe store karega
// fetchbasequery:ye aik fetch wrapper hai jo k automatically handle karta hai request headers ko or response parsing ko jaise axios karta hai bilkul usi ki similar
//endpoints:kia operation perform karne wale  hai wo hmm endpoints me define karte

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath:'postApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com/',
    }),

    endpoints:(builder)=>({
          getAllPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
          }),
          getPostById: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'GET'
            })
        }),
        getPostByLimit: builder.query({
            query: (num) => ({
                url: `posts?_limit=${num}`,
                method: 'GET'
            })
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE'
            })
        }),
        createPost: builder.mutation({
            query: () => ({
                url: 'posts',
                method: 'POST',
                body:{
                  title:'This is new title',
                  body: 'This is new body',
                  id:1,
                },
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
        }),
        updatePost: builder.mutation({
            query: (updatePostData) => ({
                const {id,...data} = updatePostData,
                url: `posts/${id}`,
                method: 'PUT',
                body:data,
                
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
        }),


    })
   


})
 
 export const {useGetAllPostQuery,useGetPostByIdQuery,useGetPostByLimitQuery,useDeletePostMutation,useCreatePostMutation,useUpdatePostMutation} = postApi