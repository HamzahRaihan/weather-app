import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const APIkey = import.meta.env.VITE_AUTOCOMPLETE_API_KEY;

export const geopifyAPI = createApi({
  reducerPath: 'geopifyAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.geoapify.com/v1/geocode/',
  }),
  endpoints: (builder) => ({
    getAutocompleteLocation: builder.query({
      query: (searchValue: string) =>
        `autocomplete?text=${searchValue}&apiKey=${APIkey}`,
    }),
  }),
});

export const { useGetAutocompleteLocationQuery } = geopifyAPI;
