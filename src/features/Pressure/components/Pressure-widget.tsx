import { Card, CardContent } from '@/components/ui/card';
import { WiBarometer } from 'react-icons/wi';

const PressureWidget = () => {
  return (
    <Card className="h-40">
      <CardContent className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-1 mb-2">
              <WiBarometer />
              <p className="font-bold text-sm">Pressure</p>
            </div>
            <p className="text-xl font-bold">1000 hPa</p>
          </div>
          <div className="text-xs text-zinc-300">
            <p>Low pressure</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PressureWidget;
