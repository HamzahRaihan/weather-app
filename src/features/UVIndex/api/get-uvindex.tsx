import { useGetUVIndexQuery } from '@/services/OpenMateoAPI';
import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';

type UVProps = {
  uvLevel: string;
  uvMessage: string;
};

const useGetUVIndex = () => {
  const { lat, lon } = useSelector(
    (state: RootState) => state.geolocation.geolocation
  );
  const { data, isLoading, isError } = useGetUVIndexQuery({ lat, lon });

  const UVDescription: UVProps = {
    uvLevel: '',
    uvMessage: '',
  };

  function describeUVIndex(uv: number): UVProps | undefined {
    if (uv <= 2) {
      UVDescription.uvLevel = 'Low';
      UVDescription.uvMessage = 'No protection needed.';
    }
    if (uv > 2 && uv <= 5) {
      UVDescription.uvLevel = 'Moderate';
      UVDescription.uvMessage = 'Wear a hat and use sunscreen.';
    }
    if (uv > 5 && uv <= 7) {
      UVDescription.uvLevel = 'High';
      UVDescription.uvMessage = 'Take extra precautions.';
    }
    if (uv > 7 && uv <= 10) {
      UVDescription.uvLevel = 'Very High';
      UVDescription.uvMessage =
        'Wear protective clothing. Avoid the sun during peak hours.';
    }
    if (uv > 10 && uv <= 11) {
      UVDescription.uvLevel = 'Extreme';
      UVDescription.uvMessage =
        'Take all precautions, including staying indoors during peak hours.';
    }
    return UVDescription;
  }
  return { data, isLoading, isError, describeUVIndex };
};

export default useGetUVIndex;
