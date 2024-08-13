import { createSlice } from '@reduxjs/toolkit';

type State = {
  location: string;
  isLoading: boolean;
};

const initialState: State = {
  location: 'Special Capital Region of Jakarta',
  isLoading: true,
};

const searchSlice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      return {
        ...state,
        location: action.payload,
        isLoading: true,
      };
    },
    setLocation: (state, action) => {
      return { ...state, location: action.payload };
    },
  },
});

export const { setStatus, setLocation } = searchSlice.actions;
export default searchSlice.reducer;
