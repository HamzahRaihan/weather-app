import { Card, CardContent } from '@/components/ui/card';
import { WiBarometer } from 'react-icons/wi';
import useGetPressure from '../api/get-pressure';

const PressureWidget = () => {
  const { describePressure, data } = useGetPressure();

  return (
    <Card className="h-40">
      <CardContent className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-1 mb-2">
              <WiBarometer />
              <p className="font-bold text-sm">Pressure</p>
            </div>
            <p className="text-xl font-bold">{data?.main?.pressure} hPa</p>
          </div>
          <div className="text-xs dark:text-zinc-300">
            <p>{describePressure(data?.main?.pressure)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PressureWidget;
