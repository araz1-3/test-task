import { createSlice } from "@reduxjs/toolkit";

const loadDataFromLocalStorage = () => {
  const storedData = JSON.parse(localStorage.getItem("formData"));
  return Array.isArray(storedData) ? storedData : [];
};

const saveDataToLocalStorage = (data) => {
  localStorage.setItem("formData", JSON.stringify(data));
};

const formDataSlice = createSlice({
  name: "formData",
  initialState: {
    data: loadDataFromLocalStorage(),
  },
  reducers: {
    addFormData: (state, action) => {
      const newData = [...state.data, action.payload];
      state.data = newData;
      saveDataToLocalStorage(newData);
    },

    updateFormData: (state, action) => {
      const { id, updatedData } = action.payload;
      const updatedDataArray = state.data.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      );
      state.data = updatedDataArray;
      saveDataToLocalStorage(updatedDataArray);
    },

    deleteFormData: (state, action) => {
      const id = action.payload;
      const filteredData = state.data.filter((item) => item.id !== id);
      state.data = filteredData;
      saveDataToLocalStorage(filteredData);
    },
  },
});

export const { addFormData, updateFormData, deleteFormData } = formDataSlice.actions;
export default formDataSlice.reducer;
