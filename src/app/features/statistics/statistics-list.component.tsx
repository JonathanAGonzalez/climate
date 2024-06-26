import { useWeatherStore } from '@/app/core/store/weather.store';
import { formatTemperature } from '@/app/core/utils/fortmatTemperature';
import { idRandom } from '@/app/core/utils/idRandom.util';

export const StatisticsList = () => {
  const weatherData = useWeatherStore((store) => store.weatherData);

  if (!weatherData) return;

  const listStatistics = [
    {
      id: idRandom(),
      name: `Maximum temperature: ${formatTemperature(
        weatherData?.main.temp_max
      )}`,
    },
    {
      id: idRandom(),
      name: `Minimum temperature: ${formatTemperature(
        weatherData?.main.temp_min
      )}`,
    },
    {
      id: idRandom(),
      name: `Thermal sensation: ${formatTemperature(
        weatherData?.main.feels_like
      )}`,
    },
    {
      id: idRandom(),
      name: `Humidity: ${weatherData?.main?.humidity}%`,
    },
    {
      id: idRandom(),
      name: `Wind speed: ${weatherData?.wind.speed}`,
    },
  ];

  return (
    <article>
      <ul className='gap-4 grid pt-4'>
        {listStatistics.map((list) => (
          <li key={list.id} className='text-white'>
            {list.name}
          </li>
        ))}
      </ul>
    </article>
  );
};
