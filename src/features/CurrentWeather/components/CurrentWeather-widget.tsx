import { Card, CardContent } from '@/components/ui/card';
import useGetCurrentWeather from '../api/get-currentWeather';
import { useEffect, useState } from 'react';

const CurrentWeatherWidget = () => {
  const { data } = useGetCurrentWeather();

  const [weatherIcon, setWeatherIcon] = useState('');

  function getLocalTime(
    timezone: number,
    dt: number
  ): { time: string; local_time_Day: string } | undefined {
    if (!data) return undefined;
    const utc_time = new Date(dt * 1000);
    const local_time = new Date(utc_time.getTime() + timezone * 1000);
    const time = local_time.toLocaleTimeString('en-US', {
      timeZone: 'UTC',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    });
    const local_time_Day = local_time.toLocaleString('en-us', {
      timeZone: 'UTC',
      weekday: 'long',
    });
    return { time, local_time_Day };
  }

  useEffect(() => {
    const getWeatherIcon = (): string | undefined => {
      if (!data) {
        return undefined;
      }
      const icon = data.weather[0].icon;
      setWeatherIcon(icon);
    };
    getWeatherIcon();
  }, [data]);

  return (
    <Card className="h-full">
      <CardContent className="h-full">
        <div className="flex justify-between h-full">
          <div className="flex flex-col justify-between space-y-2">
            <div>
              <p className="font-bold">
                {getLocalTime(data?.timezone, data?.dt)?.local_time_Day}
              </p>
              <p>{data?.name}</p>
            </div>
            <div className="font-bold text-7xl">
              {Math.round(data?.main?.temp)}&deg;
            </div>
            <div className="flex flex-col">
              <p>
                Real feel{' '}
                <span className="font-bold">
                  {Math.round(data?.main?.feels_like)}&deg;
                </span>
              </p>
              <p>
                Wind{' '}
                <span className="font-bold">
                  {Math.round(data?.wind.speed)}m/s
                </span>
              </p>
              <p>
                Humidity{' '}
                <span className="font-bold">
                  {Math.round(data?.main?.humidity)}%
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-right font-bold text-lg">
              {getLocalTime(data?.timezone, data?.dt)?.time}
            </p>
            <div className="font-bold">
              <img
                src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                alt="svgs"
              />
            </div>
            <div className="flex flex-col">
              <p>
                Sunrise{' '}
                <span className="font-bold">
                  {getLocalTime(data?.timezone, data?.sys?.sunrise)?.time}
                </span>
              </p>
              <p>
                Sunset{' '}
                <span className="font-bold">
                  {getLocalTime(data?.timezone, data?.sys?.sunset)?.time}
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeatherWidget;
