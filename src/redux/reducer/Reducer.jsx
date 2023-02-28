import { createSlice } from "@reduxjs/toolkit";
import { expense } from "../../data/data";

const initialState = {
  expenseList: expense
};

export const expenseReducer = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addNewExpense: (state, action) => {
      state.expenseList = [...state.expenseList, action.payload]
    },
  },
});

export const { addNewExpense } = expenseReducer.actions;

export default expenseReducer.reducer;
