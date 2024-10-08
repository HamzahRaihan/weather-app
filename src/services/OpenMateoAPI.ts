import { LatitudeAndLongitude } from '@/types/weather';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const openMateoApi = createApi({
  reducerPath: 'openMateoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.open-meteo.com/v1/forecast',
  }),
  endpoints: (builder) => ({
    getChanceOfRain: builder.query({
      query: ({ lat, lon }: LatitudeAndLongitude) =>
        `?latitude=${lat}&longitude=${lon}&hourly=precipitation_probability&timezone=Asia%2FSingapore&forecast_days=1`,
    }),
    getWindSpeedAndDirection: builder.query({
      query: ({ lat, lon }: LatitudeAndLongitude) =>
        `?latitude=${lat}&longitude=${lon}&hourly=wind_speed_10m,wind_direction_10m&timezone=Asia%2FSingapore&forecast_days=1`,
    }),
    getPrecipitation: builder.query({
      query: ({ lat, lon }: LatitudeAndLongitude) =>
        `?latitude=${lat}&longitude=${lon}&hourly=precipitation&timezone=Asia%2FSingapore&forecast_days=1`,
    }),
    getUVIndex: builder.query({
      query: ({ lat, lon }: LatitudeAndLongitude) =>
        `?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&forecast_days=1`,
    }),
  }),
});

export const {
  useGetChanceOfRainQuery,
  useGetWindSpeedAndDirectionQuery,
  useGetPrecipitationQuery,
  useGetUVIndexQuery,
} = openMateoApi;
