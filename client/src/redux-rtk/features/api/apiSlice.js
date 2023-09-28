import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
        prepareHeaders: async (headers, { getState }) => {

            const token = getState()?.auth?.accessToken;
            token && headers.set("Authorization", `Bearer ${token}`)
            return headers;
        }
    }),
    tagTypes: ['Users', 'User', 'Profile', 'Categories', 'Category', 'CardTemps', 'CardTemp', 'Prompts', 'Prompt', 'Chat', 'Chats'],
    endpoints: () => ({}),
})