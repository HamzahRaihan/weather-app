import { RootState } from '@/states/store';
import { useSelector } from 'react-redux';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

const useGetWeatherMap = () => {
  const { lat, lon } = useSelector(
    (state: RootState) => state.geolocation.geolocation
  );

  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const APIkey = import.meta.env.VITE_API_KEY;
    const map = L.map(mapRef.current || '', {
      center: [lat, lon],
      zoom: 6,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
      ],
    });
    console.log('🚀 ~ useEffect ~ map:', map);
    map.zoomControl.remove();
    map.touchZoom.enable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.enable();
    map.boxZoom.disable();
    map.keyboard.disable();

    const precipitationLayer = L.tileLayer(
      `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${APIkey}`
    );
    precipitationLayer.addTo(map);
    return () => {
      map.remove();
    };
  }, [lat, lon]);

  return mapRef;
};

export default useGetWeatherMap;
