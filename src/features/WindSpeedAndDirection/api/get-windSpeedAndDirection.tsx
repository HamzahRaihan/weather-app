import { useGetWindSpeedAndDirectionQuery } from '@/services/OpenMateoAPI';
import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';

const useGetWindSpeedAndDirection = () => {
  const { lat, lon } = useSelector(
    (state: RootState) => state.geolocation.geolocation
  );

  const { data, isLoading, isError } = useGetWindSpeedAndDirectionQuery({
    lat,
    lon,
  });

  return { data, isLoading, isError };
};

export default useGetWindSpeedAndDirection;
