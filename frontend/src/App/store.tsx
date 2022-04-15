import { configureStore } from "@reduxjs/toolkit";
import filterNamesReducer from "../Features/filterNamesSlice";

export default configureStore({
  reducer: {
    filterNames: filterNamesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
});