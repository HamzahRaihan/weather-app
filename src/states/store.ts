import { configureStore } from '@reduxjs/toolkit';
import geolocationSlice from './geolocation/geoloctionSlice';
import { weatherApi } from '@/services/WeatherAPI';
import { openMateoApi } from '@/services/OpenMateoAPI';
import searchSlice from './search/searchSlice';

export const store = configureStore({
  reducer: {
    geolocation: geolocationSlice,
    location: searchSlice,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [openMateoApi.reducerPath]: openMateoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      weatherApi.middleware,
      openMateoApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
