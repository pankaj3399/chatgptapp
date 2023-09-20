import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';

export const promptApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // all all prompt endpoint here
        getPrompts: builder.query({
            query: () => 'prompt',
            keepUnusedDataFor: 600,
            providesTags: ['Prompts'],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // prompt endpoint here
        createPrompt: builder.mutation({
            query: (data) => ({
                url: 'prompt',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ["Prompts"],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    toast.success(result.data.message);
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

    })
});

export const {
    useGetPromptsQuery,
    useCreatePromptMutation
} = promptApi;