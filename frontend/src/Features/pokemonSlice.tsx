import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterNames: [],
  inputName: ''
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setFilterNames: (state, action) => {
      state.filterNames = action.payload.filterNames;
    },
    setInputName: (state, action) => {
      state.inputName = action.payload.inputName;
    }
  },
});

export const { setFilterNames, setInputName } = pokemonSlice.actions;

export const selectFilterNames = (state: { filterNames: any; }) => state.filterNames;
export const selectInputName = (state: { inputName: any; }) => state.inputName;

export default pokemonSlice.reducer;