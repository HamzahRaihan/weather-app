import { useGetCurrentWeatherQuery } from '@/services/WeatherAPI';
import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';

const useGetCurrentWeather = () => {
  const { lat, lon } = useSelector(
    (state: RootState) => state.geolocation.geolocation
  );
  const { data, isLoading, isError } = useGetCurrentWeatherQuery({ lat, lon });

  return { data, isLoading, isError };
};

export default useGetCurrentWeather;
