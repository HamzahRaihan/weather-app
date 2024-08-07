import AirPollutionWidget from '@/features/AirPollution/components/AirPollution-widget';
import ChanceOfRainWidget from '@/features/ChanceOfRain/components/ChanceOfRain-widget';
import CurrentWeatherWidget from '@/features/CurrentWeather/components/CurrentWeather-widget';
import HourlyForecastWidget from '@/features/HourlyForecast/components/HourlyForecast-widget';
import PrecipitationWidget from '@/features/Precipitation/components/Precipitation-widget';
import UVIndexWidget from '@/features/UVIndex/components/UVIndex-widget';
import WindSpeedAndDirection from '@/features/WindSpeedAndDirection/components/WindSpeedAndDirection-widget';

const Weather = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col justify-between gap-4">
          <CurrentWeatherWidget />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <AirPollutionWidget />
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-4 h-full">
              <UVIndexWidget />
              <PrecipitationWidget />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <UVIndexWidget />
          <WindSpeedAndDirection />
          <UVIndexWidget />
          <PrecipitationWidget />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <HourlyForecastWidget />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-4">
              <AirPollutionWidget />
              <AirPollutionWidget />
            </div>
          </div>
        </div>
        <ChanceOfRainWidget />
      </div>
    </div>
  );
};

export default Weather;
