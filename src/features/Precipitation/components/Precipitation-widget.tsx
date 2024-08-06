import { Card, CardContent } from '@/components/ui/card';
import { BiSolidDroplet } from 'react-icons/bi';

const PrecipitationWidget = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <BiSolidDroplet />
            <p>Precipitation</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-xl">0mm</p>
            <p className="text-sm">in last 3 hours</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrecipitationWidget;
