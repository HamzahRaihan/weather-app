import { FaDroplet } from 'react-icons/fa6';
import { Card, CardContent } from '@/components/ui/card';

const HumidityWidget = () => {
  return (
    <Card className="h-40">
      <CardContent className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-1 mb-2">
              <FaDroplet />
              <p className="font-bold text-sm">Humidity</p>
            </div>
            <p className="text-xl font-bold">8%</p>
          </div>
          <div className="text-xs text-zinc-300">
            <p>It's very humid. It might feel uncomfortable.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HumidityWidget;
