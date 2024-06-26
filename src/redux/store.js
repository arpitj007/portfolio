import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import rootReducer from "./reducer";

const preLoadedState = {};
const store = configureStore({
  reducer: rootReducer,
  preLoadedState,
  middleware: [thunk],
  devTools: true,
});

export default store;
