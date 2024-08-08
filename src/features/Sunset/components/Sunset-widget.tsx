import { Card, CardContent } from '@/components/ui/card';
import { TbSunset2 } from 'react-icons/tb';

const SunsetWidget = () => {
  return (
    <Card className="h-40">
      <CardContent className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-1 mb-2">
              <TbSunset2 />
              <p className="font-bold text-sm">Sunset</p>
            </div>
            <p className="text-xl font-bold">3:00 am</p>
          </div>
          <div className="text-xs text-zinc-300">
            <p>
              Sunrise <span>3:00</span>{' '}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SunsetWidget;
