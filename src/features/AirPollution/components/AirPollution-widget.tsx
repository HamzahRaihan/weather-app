import { Card, CardContent } from '@/components/ui/card';
import { GiAbstract030 } from 'react-icons/gi';
import GetAirPollution from '../api/get-airPollution';

type AlertProps = {
  description: string;
  alert: string;
};

const AirPollutionWidget = () => {
  const { data } = GetAirPollution();
  console.log('🚀 ~ AirPollutionWidget ~ data:', data);

  function alertPollution(aql: number): AlertProps | undefined {
    switch (aql) {
      case 1:
        return {
          description: 'Good air quality',
          alert: 'Enjoy outdoor activities',
        };
      case 2:
        return {
          description: 'Fair air quality',
          alert:
            'Limit prolonged outdoor exertion if you are sensitive to air pollution.',
        };
      case 3:
        return {
          description: 'Moderate air quality',
          alert:
            'Reduce prolonged or heavy exertion. Take more breaks, do less intense activities.',
        };
      case 4:
        return {
          description: 'Poor air quality',
          alert:
            'Avoid prolonged or heavy exertion. Move activities indoors or reschedule.',
        };
      case 5:
        return {
          description: 'Very Poor air quality',
          alert:
            'Avoid all outdoor activities. Move activities indoors or reschedule.',
        };
      default:
        break;
    }
  }

  return (
    <Card className="h-full">
      <CardContent className="h-full">
        <div className="flex flex-col gap-4 h-full justify-between">
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-1 font-bold text-sm">
              <GiAbstract030 /> Air Pollution
            </p>
            <div className="font-bold text-xl">
              {alertPollution(data?.list[0]?.main?.aqi)?.description}
            </div>
            <div>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={data?.list[0]?.main?.aqi}
                className="accent-zinc-100 h-2 w-full appearance-none overflow-hidden rounded-sm"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(58,110,180,1) 0%, rgba(126,212,87,1) 20%, rgba(248,212,73,1) 40%, rgba(235,77,96,1) 60%, rgba(180,96,231,1) 80%, rgba(178,34,34,1) 100%)',
                }}
              />
            </div>
          </div>
          <div className="dark:text-zinc-300 text-xs">
            {alertPollution(data?.list[0]?.main?.aqi)?.alert}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AirPollutionWidget;
