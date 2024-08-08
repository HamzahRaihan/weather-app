import { Card, CardContent } from '@/components/ui/card';
import { FaTemperatureHalf } from 'react-icons/fa6';

const TemperatureWidget = () => {
  return (
    <Card className="h-40">
      <CardContent className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-1 mb-2">
              <FaTemperatureHalf />
              <p className="font-bold text-sm">Temperature</p>
            </div>
            <p className="text-xl font-bold">8&deg;</p>
          </div>
          <div className="text-xs text-zinc-300">
            <p>Wind is making it feel colder.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperatureWidget;
