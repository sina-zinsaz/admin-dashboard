import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean;
}

const getInitialTheme = (): boolean => {
  const savedTheme = localStorage.getItem("darkMode");
  return savedTheme !== null ? JSON.parse(savedTheme) : true; 
};

const initialState: ThemeState = {
  darkMode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

export type { ThemeState };
