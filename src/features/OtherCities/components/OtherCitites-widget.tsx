import { Card, CardContent } from '@/components/ui/card';
import { useGetOtherCities } from '../api/other-cities.datas';
import _ from 'lodash';

const OtherCitiesWidget = () => {
  const result = useGetOtherCities();
  return (
    <>
      {result?.map((item) => (
        <Card className="h-full" key={item.data?.name}>
          <CardContent className="h-full">
            <div className="flex justify-between h-full">
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-sm">{item.data?.sys?.country}</h1>
                  <p className="text-md font-bold">{item.data?.name}</p>
                </div>
                <div>{_.startCase(item.data?.weather[0].description)}</div>
              </div>

              <div className="flex flex-col justify-between items-center">
                <img
                  src={`https://openweathermap.org/img/wn/${item.data?.weather[0].icon}@2x.png`}
                  alt="weather-icon"
                />
                <div className="text-md">
                  {Math.round(item.data?.main.temp)}&deg;
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default OtherCitiesWidget;
