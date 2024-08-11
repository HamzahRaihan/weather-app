import { Card, CardContent } from '@/components/ui/card';
import useGetCurrentWeather from '@/features/CurrentWeather/api/get-currentWeather';
import { TbSunset2 } from 'react-icons/tb';

const SunsetWidget = () => {
  const { data } = useGetCurrentWeather();

  function currentTime(hour: number, timezone: number): string | undefined {
    if (!data) return undefined;
    const utc_time = new Date(hour * 1000);
    const local_time = new Date(utc_time.getTime() + timezone * 1000);
    const local_time_Day = local_time.toLocaleString('en-us', {
      timeZone: 'UTC',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    });
    return local_time_Day;
  }

  return (
    <Card className="h-40">
      <CardContent className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-1 mb-2">
              <TbSunset2 />
              <p className="font-bold text-sm">Sunset</p>
            </div>
            <p className="text-xl font-bold">
              {currentTime(data?.sys?.sunset, data?.timezone)}
            </p>
          </div>
          <div className="text-xs text-zinc-300">
            <p>Sunrise {currentTime(data?.sys?.sunrise, data?.timezone)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SunsetWidget;
