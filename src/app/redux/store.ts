import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: function () {
    throw new Error("Function not implemented.");
  },
});

export default store;
