import { Card, CardContent } from '@/components/ui/card';
import { ClockIcon } from '@radix-ui/react-icons';

const HourlyForecastWidget = () => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2 h-full">
        <div className="flex items-center font-bold gap-1 text-sm">
          <ClockIcon />
          <p>Hourly Forcast</p>
        </div>
        <div className="flex justify-between h-24">
          <div className="flex flex-col items-center justify-between">
            <p className="text-center text-zinc-400">13</p>
            <div>Cloudy</div>
            <p className="text-center">-2&deg;</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <p className="text-center text-zinc-400">13</p>
            <div>Cloudy</div>
            <p className="text-center">-2&deg;</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <p className="text-center text-zinc-400">13</p>
            <div>Cloudy</div>
            <p className="text-center">-2&deg;</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <p className="text-center text-zinc-400">13</p>
            <div>Cloudy</div>
            <p className="text-center">-2&deg;</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <p className="text-center text-zinc-400">13</p>
            <div>Cloudy</div>
            <p className="text-center">-2&deg;</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <p className="text-center text-zinc-400">13</p>
            <div>Cloudy</div>
            <p className="text-center">-2&deg;</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyForecastWidget;
