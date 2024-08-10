import { Card, CardContent } from '@/components/ui/card';
import { WiDayRainWind } from 'react-icons/wi';
import useGetChanceOfRain from '../api/get-chanceOfRain';
import { useEffect, useRef, useState } from 'react';
import Chart, { BarController } from 'chart.js/auto';

const ChanceOfRainWidget = () => {
  const { data, isSuccess } = useGetChanceOfRain();
  console.log('🚀 ~ ChanceOfRainWidget ~ data:', data);

  const [, setChart] = useState<Chart<'bar', number[], string> | null>(null);

  const chartRef = useRef<HTMLCanvasElement | null>(null);

  function convertToHour(time: Date): string {
    const date = new Date(time);
    const localTimeFormat = date.toLocaleTimeString('en-US', {
      timeZone: 'UTC',
      hour12: true,
      hour: 'numeric',
    });
    return localTimeFormat;
  }

  useEffect(() => {
    if (chartRef.current && isSuccess) {
      const hourlyData: Date[] = data?.hourly?.time;
      const precipitationProbability: number[] =
        data?.hourly?.precipitation_probability;
      const convertedHour = hourlyData?.map((item) => convertToHour(item));

      Chart.register(BarController);
      // Create a new chart instance and store it in state
      const newChart = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: convertedHour.map((time) => time),
          datasets: [
            {
              label: 'Chance of Rain (%)',
              data: precipitationProbability.map((item) => item),
              backgroundColor: '#171717',
              borderWidth: 1,
              borderRadius: Number.MAX_VALUE,
              barThickness: 10,
              minBarLength: 5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: true,
              },
              ticks: {
                stepSize: 10,
                callback: (value) => {
                  if (Number(value) <= 5) {
                    return 'Minimal';
                  } else if (Number(value) <= 10) {
                    return 'Slight';
                  } else if (Number(value) <= 40) {
                    return 'Moderate';
                  } else {
                    return 'Rainy';
                  }
                },
              },
            },
          },
        },
      });

      return () => {
        setChart(newChart);
        newChart.destroy();
      };
    }
  }, [data?.hourly, isSuccess]);

  return (
    <Card>
      <CardContent>
        <div className="flex gap-1 items-center mb-2">
          <WiDayRainWind />
          <p className="text-sm font-bold">Chance Of Rain</p>
        </div>
        <div className="h-24">
          <canvas ref={chartRef} className="dark:invert" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ChanceOfRainWidget;
