import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export  interface PageState {
  pageTitle: string;
  activeIndex: number | null;
}

const initialState: PageState = {
  pageTitle: '',
  activeIndex: 0,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.pageTitle = action.payload;
    },
     setActiveIndex(state, action: PayloadAction<number | null>) {
      state.activeIndex = action.payload;
    },
  },
});

export const { setPageTitle , setActiveIndex  } = pageSlice.actions;

export default pageSlice.reducer;
