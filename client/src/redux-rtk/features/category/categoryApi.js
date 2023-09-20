import { apiSlice } from "../api/apiSlice";
import toast from 'react-hot-toast';

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        // all all tarots endpoint here
        getCategories: builder.query({
            query: () => 'category',
            keepUnusedDataFor: 600,
            providesTags: ['Categories'],
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (error) {
                    toast.error(error.error.data.message);
                }
            }
        }),

        // // get single tarot endpoint here
        // getTarotCard: builder.query({
        //     query: (tarotId) => `tool/tarot/${tarotId}`,
        //     providesTags: (result, error, arg) => [{
        //         type: 'Tarot', id: arg
        //     }],
        //     async onQueryStarted(arg, { queryFulfilled }) {
        //         try {
        //             await queryFulfilled;
        //         } catch (error) {
        //             console.log(error?.error?.data?.message)
        //         }
        //     }
        // }),

        // // register endpoint here
        // createTarot: builder.mutation({
        //     query: (data) => ({
        //         url: 'tool/tarot',
        //         method: 'POST',
        //         body: data
        //     }),
        //     invalidatesTags: ["Tarots"],
        //     async onQueryStarted(arg, { queryFulfilled }) {
        //         try {
        //             const result = await queryFulfilled;
        //             toast.success(result.data.message);
        //         } catch (error) {
        //             console.log(error);
        //             toast.error(error.error.data.message);
        //         }
        //     }
        // }),

        // // updating tarot data
        // updateTarotCard: builder.mutation({
        //     query: ({ tarotId, updatedData }) => ({
        //         url: `tool/tarot/${tarotId}`,
        //         method: 'PATCH',
        //         body: updatedData,
        //     }),
        //     invalidatesTags: (result, error, arg) => [
        //         'Tarots',
        //         { type: 'Tarot', id: arg.roleId }
        //     ],
        //     async onQueryStarted(arg, { queryFulfilled }) {
        //         try {
        //             const result = await queryFulfilled;
        //             toast.success(result.data.message);
        //         } catch (error) {
        //             toast.error(error.error.data.message);
        //         }
        //     }
        // }),

        // // delete tarot api endpoint
        // deleteTarotCard: builder.mutation({
        //     query: (tarotId) => ({
        //         url: `tool/tarot/${tarotId}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Tarots'],
        //     async onQueryStarted(arg, { queryFulfilled }) {
        //         try {
        //             const result = await queryFulfilled;
        //             toast.success(result.data.message);
        //         } catch (error) {
        //             toast.error(error.error.data.message);
        //         }
        //     }
        // }),

    })
});

export const {
    useGetCategoriesQuery
} = categoryApi;