import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    userSlice,
  },
});
