import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/types";
import toast from "react-hot-toast";

const storedUser = localStorage.getItem("user");

const initialState: { userInfo: User } = {
  userInfo: storedUser ? JSON.parse(storedUser) : { name: "", theme: "light" },
};

// Update theme for on the document `as Tailwind require`
const applyTheme = (theme: "light" | "dark") => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Immediately apply the stored theme at initialization
applyTheme(initialState.userInfo.theme);

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    updateUserName: (state, action: PayloadAction<string>) => {
      // 1. Update user name
      state.userInfo.name = action.payload;
      // Add user to local storage
      localStorage.setItem("user", JSON.stringify(state.userInfo));
      // Notification
      toast.success("تم تعديل الإسم بنجاح.");
    },
    toggleTheme: (state) => {
      state.userInfo.theme =
        state.userInfo.theme === "light" ? "dark" : "light";
      applyTheme(state.userInfo.theme);
      localStorage.setItem("user", JSON.stringify(state.userInfo));
      toast.success(
        state.userInfo.theme === "dark"
          ? "تم تفعيل الوضع الداكن!"
          : "تم تعطيل الوضع الداكن!",
      );
    },
  },
});

export const { updateUserName, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
