import { useWeatherStore } from '@/app/core/store/weather.store';
import { getFormattedDate } from '@/app/core/utils/formatDate';
import { formatTemperature } from '@/app/core/utils/fortmatTemperature';
import flags from '@/app/core/flags';
import { Search } from '../search/component/search.component';

export const WatherInformation = () => {
  const weatherData = useWeatherStore((store) => store.weatherData);
  const country = useWeatherStore((store) => store.country);
  const flag = flags.find((flag) => flag.code === country);

  return (
    <section
      className={`h-full flex flex-col justify-between md:justify-start md:justify-items-end ${
        !weatherData
          ? 'content-start md:content-center'
          : 'content-between md:grid'
      } justify-start md:pl-8 md:pb-8 p-4`}
    >
      <div>
        <h2 className='w-full text-2xl text-white pt-4'>Jona González</h2>
        {!weatherData && (
          <h2 className='text-white text-xs text-left'>Search a city</h2>
        )}
        <span className='md:hidden'>
          <Search />
        </span>
      </div>

      {weatherData && (
        <article className='flex items-center text-white'>
          <p className='text-[45px] md:text-[85px] font-bold'>
            {`${formatTemperature(weatherData?.main?.temp)}°`}
          </p>
          <div className='ml-4'>
            <div className='flex flex-col items-start'>
              <h3 className='text-3xl'>
                {country} - {flag?.emoji}
              </h3>
              <span className='flex items-center'>
                <h2 className='text-[25px] md:text-[45px] font-semibold'>
                  {weatherData?.name}
                </h2>
                <figure className='flex'>
                  {weatherData.weather.map((icon) => (
                    <img
                      key={icon.id}
                      className='w-[70px]'
                      src={`https://openweathermap.org/img/wn/${icon.icon}@2x.png`}
                      alt=''
                    />
                  ))}
                </figure>
              </span>
            </div>
            <p className='text-2xl '>{getFormattedDate()}</p>
          </div>
        </article>
      )}
    </section>
  );
};
