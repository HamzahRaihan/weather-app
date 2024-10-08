import AirPollutionWidget from '@/features/AirPollution/components/AirPollution-widget';
import ChanceOfRainWidget from '@/features/ChanceOfRain/components/ChanceOfRain-widget';
import CurrentWeatherWidget from '@/features/CurrentWeather/components/CurrentWeather-widget';
import HourlyForecastWidget from '@/features/HourlyForecast/components/HourlyForecast-widget';
import HumidityWidget from '@/features/Humidity/components/Humidity-widget';
import OtherCitiesWidget from '@/features/OtherCities/components/OtherCitites-widget';
import PrecipitationWidget from '@/features/Precipitation/components/Precipitation-widget';
import PressureWidget from '@/features/Pressure/components/Pressure-widget';
import SunsetWidget from '@/features/Sunset/components/Sunset-widget';
import TemperatureWidget from '@/features/Temperature/components/Temperature-widget';
import UVIndexWidget from '@/features/UVIndex/components/UVIndex-widget';
import VisibilityWidget from '@/features/Visibility/components/Visibility-widget';
import WeatherMapWidget from '@/features/WeatherMap/components/WeatherMap-widget';
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
          <SunsetWidget />
          <WindSpeedAndDirection />
          <TemperatureWidget />
          <HumidityWidget />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <HourlyForecastWidget />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-4">
              <VisibilityWidget />
              <PressureWidget />
            </div>
          </div>
        </div>
        <ChanceOfRainWidget />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-2 lg:col-span-3 flex flex-col gap-3">
          <h1 className="text-md font-bold">Precipitation Map</h1>
          <WeatherMapWidget />
        </div>
        <div className="lg:col-span-1 col-span-2 flex flex-col gap-3">
          <h1 className="text-md font-bold">Some Other Cities</h1>
          <OtherCitiesWidget />
        </div>
      </div>
    </div>
  );
};

export default Weather;
