import { useGetPrecipitationQuery } from '@/services/OpenMateoAPI';
import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';

const GetPrecipitation = () => {
  const { lat, lon } = useSelector(
    (state: RootState) => state.geolocation.geolocation
  );

  const { data, isLoading, isError } = useGetPrecipitationQuery({ lat, lon });

  return { data, isLoading, isError };
};

export default GetPrecipitation;
