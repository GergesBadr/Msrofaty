import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./features/transactionsSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
