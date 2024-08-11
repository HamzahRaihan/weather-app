import { useGetChanceOfRainQuery } from '@/services/OpenMateoAPI';
import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';

const useGetChanceOfRain = () => {
  const { lat, lon } = useSelector(
    (state: RootState) => state.geolocation.geolocation
  );
  const { data, isLoading, isError, isSuccess } = useGetChanceOfRainQuery({
    lat,
    lon,
  });

  return { data, isLoading, isError, isSuccess };
};

export default useGetChanceOfRain;
