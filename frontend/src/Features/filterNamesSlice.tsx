import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterNames: []
};

const filterNamesSlice = createSlice({
  name: "filterNames",
  initialState,
  reducers: {
    setFilterNames: (state, action) => {
      state.filterNames = action.payload.filterNames;
    }
  },
});

export const { setFilterNames } = filterNamesSlice.actions;

export const selectFilterNames = (state: { filterNames: any; }) => state.filterNames;

export default filterNamesSlice.reducer;