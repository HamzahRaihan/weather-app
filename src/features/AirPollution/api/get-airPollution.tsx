import { useGetAirPollutionQuery } from '@/services/WeatherAPI';
import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';

const GetAirPollution = () => {
  const { lat, lon } = useSelector(
    (state: RootState) => state.geolocation.geolocation
  );

  const { data, isLoading, isError } = useGetAirPollutionQuery({ lat, lon });
  return { data, isLoading, isError };
};

export default GetAirPollution;
