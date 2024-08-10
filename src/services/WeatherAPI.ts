import { LatitudeAndLongitude } from '@/types/weather';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const APIKey = import.meta.env.VITE_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: ({ lat, lon }: LatitudeAndLongitude) =>
        `weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}`,
    }),
    getHourlyForecast: builder.query({
      query: ({ lat, lon }: LatitudeAndLongitude) =>
        `forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`,
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetHourlyForecastQuery } =
  weatherApi;
