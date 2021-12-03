import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  show: true,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload || 1;
    },
    decrement: (state, action) => {
      state.value -= action.payload || 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementAsync: (state) => {
      state.value += 1;
    },
    toggle: (state) => {
      state.show = !state.show;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, toggle, incrementAsync } =
  counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const viewShow = (state) => state.counter.show;
export default counterSlice.reducer;
