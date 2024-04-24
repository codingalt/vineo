import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_URI,
    prepareHeaders: async (headers, query) => {
      const authToken = localStorage.getItem("vineo_authToken");
      headers.set("authorization", `Bearer ${authToken}`);
      headers.set("x-app-type", "Web");
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({

    createPost: builder.mutation({
      query: (data) => ({
        url: "user/coverPhoto",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),

   
  }),
});

export const {
  useCreatePostMutation
} = postApi;
