import { useGetCurrentWeatherQuery } from '@/services/WeatherAPI';
import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';

const useGetVisibility = () => {
  const { lat, lon } = useSelector(
    (state: RootState) => state.geolocation.geolocation
  );
  const { data, isLoading, isError } = useGetCurrentWeatherQuery({ lat, lon });

  function distanceFormat(distance: number): string {
    if (distance >= 1000) {
      const distanceValue = distance / 1000;
      return `${distanceValue} km`;
    }
    return `${distance} m`;
  }

  function describeVisibility(visibility: number): string | undefined {
    const visibilityValue = visibility / 1000;
    if (visibilityValue === 10) return "It's perfectly clear right now.";
    if (visibilityValue < 10) return 'Light haze is affecting visibility.';
    return 'Invalid visibility value';
  }

  return { data, isLoading, isError, distanceFormat, describeVisibility };
};

export default useGetVisibility;
