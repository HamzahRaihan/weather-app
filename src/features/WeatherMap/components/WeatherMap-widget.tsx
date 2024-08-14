import { Card, CardContent } from '@/components/ui/card';
import useGetWeatherMap from '../api/get-weathermap';

const WeatherMapWidget = () => {
  const mapRef = useGetWeatherMap();

  return (
    <Card className="overflow-clip">
      <CardContent className="p-0 m-0 ">
        <div
          ref={mapRef}
          className="p-0 m-0 h-[40rem] dark:hue-rotate-180 dark:invert"
        />
      </CardContent>
    </Card>
  );
};

export default WeatherMapWidget;
