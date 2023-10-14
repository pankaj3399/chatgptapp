import { apiSlice } from "../api/apiSlice";
import toast from "react-hot-toast";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // all all tarots endpoint here
    getCategories: builder.query({
      query: () => "category",
      keepUnusedDataFor: 600,
      providesTags: ["Categories"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
