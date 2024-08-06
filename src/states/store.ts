import { configureStore } from '@reduxjs/toolkit';
import geolocationSlice from './geolocation/geoloctionSlice';
import { weatherApi } from '@/services/WeatherAPI';

export const store = configureStore({
  reducer: {
    geolocation: geolocationSlice,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
