import { useGetHourlyForecastQuery } from '@/services/WeatherAPI';
import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';

const GetHourlyForecast = () => {
  const { lat, lon } = useSelector(
    (state: RootState) => state.geolocation.geolocation
  );

  const { data, isLoading, isError } = useGetHourlyForecastQuery({ lat, lon });

  return { data, isLoading, isError };
};

export default GetHourlyForecast;
