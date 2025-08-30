import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/authSlice.jsx";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
