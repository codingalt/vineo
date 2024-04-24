import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authSlice from "../services/slices/auth/authSlice";
import { authApi } from "../services/api/authApi/authApi";
import { profileApi } from "../services/api/profileApi/profileApi";
import postSlice from "../services/slices/posts/postSlice";
import { postApi } from "../services/api/postApi/postApi";

export const store = configureStore({
  reducer: {
    // Auth Api
    [authApi.reducerPath]: authApi.reducer,

    // Profile Api
    [profileApi.reducerPath]: profileApi.reducer,

    // Post Api
    [postApi.reducerPath]: postApi.reducer,

    auth: authSlice,
    post: postSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      authApi.middleware,
      profileApi.middleware,
      postApi.middleware,
    ]),
});

setupListeners(store.dispatch);
