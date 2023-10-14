import { apiSlice } from "../api/apiSlice";
import toast from "react-hot-toast";

export const promptApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPrompts: builder.query({
      query: (data) => ({
        url: `prompt/?params=${data}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
    }),

    getPromptsByUser: builder.query({
      query: (data) => ({
        url: `prompt/by-auth-user/?params=${data}`,
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
    }),

    createPrompt: builder.mutation({
      query: (data) => ({
        url: "prompt",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast.success(result.data.message);
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
    }),

    updatePrompt: builder.mutation({
      query: (data) => ({
        url: "prompt",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Prompts"],
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          toast.success(result.data.message);
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
    }),

    // Add a mutation for deleting a prompt
    deletePrompt: builder.mutation({
      query: (data) => ({
        url: `prompt/?params=${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Prompts"],
      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          toast.success(result.data.message);
        } catch (error) {
          toast.error(error.error.data.message);
        }
      },
    }),
  }),
});

export const {
  useGetPromptsQuery,
  useGetPromptsByUserQuery,
  useCreatePromptMutation,
  useUpdatePromptMutation,
  useDeletePromptMutation // Add the delete mutation to the exported functions
} = promptApi;
