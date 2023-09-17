import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ApiCommentSchema {
    id: number
    by?: string
    parent?: number
    text?: string
    time?: number
    type?: string
    kids?: number[]
}

export interface ApiNewsSchema {
    id: number
    by?: string
    descendants?: number
    kids?: number[]
    score?: number
    time?: number
    title?: string
    type?: string
    url?: string
}

type Id = string | number

export const newsApi = createApi({
    tagTypes: ['newsApi'],
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API}/news/`,
        prepareHeaders: (headers) => {
            headers.set('api-key', import.meta.env.VITE_API_KEY)
            return headers
        },
    }),
    endpoints: (builder) => ({
        getAllNewNewsIds: builder.query<number[], null>({
            query: () => `getAllNewNewsIds`,
        }),
        getByIdNews: builder.query<ApiNewsSchema, { id: Id }>({
            query: (query) => `getByIdNews?id=${query.id}`,
        }),
        getByIdComment: builder.query<ApiCommentSchema, { id: Id }>({
            query: (query) => `getByIdComment?id=${query.id}`,
        }),
    }),
})

export const {
    useGetAllNewNewsIdsQuery,
    useGetByIdNewsQuery,
    useGetByIdCommentQuery,
} = newsApi
