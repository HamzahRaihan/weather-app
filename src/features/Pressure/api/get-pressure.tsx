import { useGetCurrentWeatherQuery } from '@/services/WeatherAPI';
import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';

const useGetPressure = () => {
  const { lat, lon } = useSelector(
    (state: RootState) => state.geolocation.geolocation
  );
  const { data, isLoading, isError } = useGetCurrentWeatherQuery({ lat, lon });

  function describePressure(pressure: number): string | undefined {
    if (pressure <= 1000) return 'Low pressure';
    if (pressure <= 1013) return 'Normal pressure';
    if (pressure <= 1020) return 'High pressure';
    return 'Very high pressure';
  }

  return { data, isLoading, isError, describePressure };
};

export default useGetPressure;
