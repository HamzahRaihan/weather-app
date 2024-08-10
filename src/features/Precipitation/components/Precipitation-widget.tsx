import { Card, CardContent } from '@/components/ui/card';
import { BiSolidDroplet } from 'react-icons/bi';
import GetPrecipitation from '../api/get-precipitation';

const PrecipitationWidget = () => {
  const { data } = GetPrecipitation();
  console.log('🚀 ~ PrecipitationWidget ~ data:', data);
  const date = new Date().getHours();

  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center font-bold text-sm">
            <BiSolidDroplet />
            <p>Precipitation</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">
              {data?.hourly?.precipitation[date]}
            </p>
            <p className="text-xs">in the last 1 Hour</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrecipitationWidget;
