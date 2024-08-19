import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentApi=createApi({
    reducerPath:'commentApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/api/comments",
        credentials: 'include',
    }),
    tagTypes:['Comments'],
    endpoints:(builder)=>({
        postComment: builder.mutation({
            query:(commentData)=>({
                url:"/create",
                method:"POST",
                body:commentData
            }),
            invalidatesTags:(result,error,{postId})=>[{type:"Comments",id:postId}]
        }),
       getComments:builder.query({
        query: ()=>({
            url:"/total-comments",
            method:'GET'
        })
       })
    })
        
})

export const{usePostCommentMutation,useGetCommentsQuery}=commentApi
