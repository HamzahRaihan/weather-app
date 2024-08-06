import { Card, CardContent } from '@/components/ui/card';
import GetCurrentWeather from '../api/get-currentWeather';

const CurrentWeatherWidget = () => {
  const { data } = GetCurrentWeather();
  console.log('🚀 ~ CurrentWeatherWidget ~ data:', data);

  return (
    <Card className="h-full">
      <CardContent className="h-full">
        <div className="flex justify-between h-full">
          <div className="flex flex-col justify-between space-y-2">
            <div>
              <p className="font-bold">Monday</p>
              <p>Jakarta</p>
            </div>
            <div className="font-bold text-7xl">-2&deg;</div>
            <div className="flex flex-col">
              <p>
                Real feel <span className="font-bold">-8&deg;</span>
              </p>
              <p>
                Wind <span className="font-bold">7m/s</span>
              </p>
              <p>
                Humidity <span className="font-bold">74%</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-right">Monday</p>
            <div className="font-bold">Weather Icon</div>
            <div className="flex flex-col">
              <p>
                Sunrise <span className="font-bold">-8&deg;</span>
              </p>
              <p>
                Sunset <span className="font-bold">7m/s</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeatherWidget;
