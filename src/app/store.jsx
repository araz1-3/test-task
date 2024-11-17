import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "./formDataReducer";

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});
