import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
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
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfileDetails: builder.query({
      query: () => `user/profile`,
      providesTags: ["Profile"],
    }),

    uploadCoverPhoto: builder.mutation({
      query: (data) => ({
        url: "user/coverPhoto",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),

    uploadProfilePhoto: builder.mutation({
      query: (data) => ({
        url: "user/profilePicture",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
 useGetProfileDetailsQuery,
 useUploadCoverPhotoMutation,
 useUploadProfilePhotoMutation
} = profileApi;
