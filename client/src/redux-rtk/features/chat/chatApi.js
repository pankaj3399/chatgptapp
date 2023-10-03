import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';
import { chatLogs } from "./chatSlice";

export const chatApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // all all chats endpoint here
        getChatsByAuthId: builder.query({
            query: () => 'chat/authenticated-id',
            keepUnusedDataFor: 600,
            providesTags: ['Chats'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(chatLogs(result.data.data))
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // chat endpoint here
        createChat: builder.mutation({
            query: (data) => ({
                url: 'chat',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Chats"],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    // toast.success(result.data.message);
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

    })
});

export const {
    useCreateChatMutation,
    useGetChatsByAuthIdQuery
} = chatApi;