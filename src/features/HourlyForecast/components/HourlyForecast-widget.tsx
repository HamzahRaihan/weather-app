import { Card, CardContent } from '@/components/ui/card';
import { ClockIcon } from '@radix-ui/react-icons';
import GetHourlyForecast from '../api/get-hourlyForecast';

const HourlyForecastWidget = () => {
  const { data } = GetHourlyForecast();
  console.log('🚀 ~ HourlyForecastWidget ~ data:', data);

  function convertToHour(dt: number, timezone: number) {
    const utc_time = new Date(dt * 1000);
    const local_time = new Date(utc_time.getTime() + timezone * 1000);
    const local_time_format = local_time
      .toLocaleTimeString('en-US', {
        timeZone: 'UTC',
        hour12: false,
        hour: 'numeric',
      })
      .replace('AM', '')
      .replace('PM', '');
    return local_time_format;
  }

  return (
    <Card>
      <CardContent className="flex flex-col gap-2 h-full">
        <div className="flex items-center font-bold gap-1 text-sm">
          <ClockIcon />
          <p>Hourly Forcast (3hr)</p>
        </div>
        <div className="flex justify-between h-24">
          {data?.list?.slice(0, 6).map((list: any) => (
            <div
              className="flex flex-col items-center justify-between"
              key={list.dt}
            >
              <p className="text-center text-zinc-400">
                {convertToHour(list.dt, data.city.timezone)}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`}
                alt=""
              />
              <p className="text-center">
                {Math.round(list.main.temp).toString().slice(0, 2)}&deg;
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HourlyForecastWidget;
