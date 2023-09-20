import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';

export const cardTempApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // all all temps endpoint here
        getCardTemps: builder.query({
            query: () => 'card-temp',
            keepUnusedDataFor: 600,
            providesTags: ['CardTemps'],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),
    })
});

export const {
    useGetCardTempsQuery
} = cardTempApi;