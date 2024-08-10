import { Card, CardContent } from '@/components/ui/card';
import { ClockIcon } from '@radix-ui/react-icons';
import GetHourlyForecast from '../api/get-hourlyForecast';
import { convertToHour } from '@/utils/convertToHour';

const HourlyForecastWidget = () => {
  const { data } = GetHourlyForecast();
  console.log('🚀 ~ HourlyForecastWidget ~ data:', data);

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
                alt={`${list.weather[0].icon}`}
                width={50}
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
