import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const creatorsApi = createApi({
  reducerPath: "creatorsApi",
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
  tagTypes: ["Creators"],
  endpoints: (builder) => ({
    searchCreators: builder.query({
      query: (text) => `user/searchCreators?search=${text}`,
      providesTags: ["Creators"],
    }),

    getCreatorProfile: builder.query({
      query: (username) => `user/fetchCreator/${username}`,
      providesTags: ["Creators"],
    }),
  }),
});

export const {
  useSearchCreatorsQuery,
  useGetCreatorProfileQuery
} = creatorsApi;
