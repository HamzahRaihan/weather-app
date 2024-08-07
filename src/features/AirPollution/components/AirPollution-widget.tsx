import { Card, CardContent } from '@/components/ui/card';
import { GiAbstract030 } from 'react-icons/gi';

const AirPollutionWidget = () => {
  return (
    <Card className="h-full">
      <CardContent className="h-full">
        <div className="flex flex-col gap-4 h-full justify-between">
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 font-bold text-sm">
              <GiAbstract030 /> Air Pollution
            </p>
            <div className="font-bold text-xl">Fair Air Quality</div>
            <div>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value="2"
                className="accent-zinc-100 h-2 w-full appearance-none overflow-hidden rounded-sm"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(58,110,180,1) 0%, rgba(126,212,87,1) 20%, rgba(248,212,73,1) 40%, rgba(235,77,96,1) 60%, rgba(180,96,231,1) 80%, rgba(178,34,34,1) 100%)',
                }}
              />
            </div>
          </div>
          <div className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AirPollutionWidget;
