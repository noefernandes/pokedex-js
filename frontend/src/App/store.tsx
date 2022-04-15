import { configureStore } from "@reduxjs/toolkit";
import filterNamesReducer from "../Features/pokemonSlice";
import inputNameReducer from "../Features/pokemonSlice";

export default configureStore({
  reducer: {
    filterNames: filterNamesReducer,
    inputName: inputNameReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});