import { jwtExpMsg } from "../../../configs/constants";
import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';
import { userLoggedOut } from "../auth/authSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // all all tarots endpoint here
        getCategories: builder.query({
            query: () => 'category',
            keepUnusedDataFor: 600,
            providesTags: ['Categories'],
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

export const { useGetCategoriesQuery } = categoryApi;
