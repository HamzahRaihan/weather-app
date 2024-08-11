import { Card, CardContent } from '@/components/ui/card';
import useGetCurrentWeather from '@/features/CurrentWeather/api/get-currentWeather';
import { FaTemperatureHalf } from 'react-icons/fa6';

const TemperatureWidget = () => {
  const { data } = useGetCurrentWeather();

  function tempDescribe(temp: number, feels_like: number): string {
    if (temp > feels_like) return 'Wind is making it feel colder.';
    if (temp === feels_like) return 'Similar to the actual temperature.';
    if (temp < feels_like) return 'Wind is making it feel hotter.';
    return 'Invalid temperature value';
  }

  return (
    <Card className="h-40">
      <CardContent className="h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-1 mb-2">
              <FaTemperatureHalf />
              <p className="font-bold text-sm">Temperature</p>
            </div>
            <p className="text-xl font-bold">
              {Math.round(data?.main?.feels_like)}&deg;
            </p>
          </div>
          <div className="text-xs text-zinc-300">
            {tempDescribe(
              Math.round(data?.main.temp),
              Math.round(data?.main.feels_like)
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperatureWidget;
