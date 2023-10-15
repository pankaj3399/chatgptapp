import { jwtExpMsg } from "../../../configs/constants";
import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';
import { userLoggedOut } from "../auth/authSlice";

export const cardTempApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // all all temps endpoint here
        getCardTemps: builder.query({
            query: () => 'card-temp',
            keepUnusedDataFor: 600,
            providesTags: ['CardTemps'],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    if (error.error.data.message === jwtExpMsg) {
                        dispatch(userLoggedOut());
                    }
                    toast.error(error.error.data.message);
                }
            }
        }),
    })
});

export const {
    useGetCardTempsQuery
} = cardTempApi;