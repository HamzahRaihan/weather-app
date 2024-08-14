import { useGetCurrentWeatherQuery } from '@/services/WeatherAPI';

type CityProps = {
  city: string;
  country: string;
  geolocation: { lat: number; lon: number };
  id: number;
};

const cities: CityProps[] = [
  {
    city: 'New York',
    country: 'United States',
    geolocation: { lat: 40.7128, lon: -74.006 },
    id: 1,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    geolocation: { lat: 51.5074, lon: -0.1278 },
    id: 2,
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    geolocation: { lat: 35.6895, lon: 139.6917 },
    id: 3,
  },
  {
    city: 'Paris',
    country: 'France',
    geolocation: { lat: 48.8566, lon: 2.3522 },
    id: 4,
  },
];

export const useGetOtherCities = () => {
  const data = cities.map((city) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, isSuccess } = useGetCurrentWeatherQuery({
      lat: city.geolocation.lat,
      lon: city.geolocation.lon,
    });
    return { data, isSuccess };
  });
  return data;
};
