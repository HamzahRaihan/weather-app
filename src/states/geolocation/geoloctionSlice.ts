import { LatitudeAndLongitude } from '@/types/weather';
import { createSlice } from '@reduxjs/toolkit';

type State = {
  geolocation: LatitudeAndLongitude;
  isLoading: boolean;
};

const initialState: State = {
  geolocation: { lat: -6.1753942, lon: 106.827183 },
  isLoading: true,
};

const geolocationSlice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      return {
        ...state,
        geolocation: action.payload,
        isLoading: true,
      };
    },
    saveGeoCode: (state, action) => {
      return { ...state, geolocation: action.payload };
    },
  },
});

export const { setStatus, saveGeoCode } = geolocationSlice.actions;
export default geolocationSlice.reducer;
