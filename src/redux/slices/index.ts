import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import pageReducer from './pageSlice';
import loginReducer from './loginSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    page: pageReducer,
    login: loginReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
