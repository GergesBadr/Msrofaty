import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/types";
import toast from "react-hot-toast";

const storedUser = localStorage.getItem("user");

const initialState: { user: User } = {
  user: storedUser ? JSON.parse(storedUser) : { name: "" },
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    updateUserName: (state, action: PayloadAction<string>) => {
      // 1. Update user name
      state.user.name = action.payload;
      // Add user to local storage
      localStorage.setItem("user", JSON.stringify(state.user));
      // Notification
      toast.success("تم تعديل الإسم بنجاح.");
    },
  },
});

export const { updateUserName } = userSlice.actions;

export default userSlice.reducer;
