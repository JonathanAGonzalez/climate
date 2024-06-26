import { FormEvent } from 'react';
import { toast } from 'sonner';
import { useWeatherStore } from '@/app/core/store/weather.store';

export const Search = () => {
  const onChangeCity = useWeatherStore((store) => store.onChangeCity);
  const onGetWeatherData = useWeatherStore((store) => store.onGetWeatherData);
  const onGetWeatherHistory = useWeatherStore(
    (store) => store.onGetWeatherHistory
  );

  const city = useWeatherStore((store) => store.city);
  const onClearCity = useWeatherStore((store) => store.onClearCity);
  const onSetLatestSearch = useWeatherStore((store) => store.onSetLatestSearch);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (city.length === 0) {
      toast.info('The search field must be completed.');
      return;
    }

    try {
      onSetLatestSearch(city);
      const result = await onGetWeatherData(city);
      if (result?.cod == '404') {
        toast.warning("Can't find what you're trying to search for.😕");
        return;
      }

      if (result?.cod == '200') {
        await onGetWeatherHistory(result.coord.lat, result.coord.lon);
      }
    } catch (error) {
      toast.warning("Can't find what you're trying to search for.😕");
    } finally {
      onClearCity();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='h-[98px] flex pb-2'>
        <input
          type='search'
          value={city}
          onChange={(v) => onChangeCity(v.target.value)}
          placeholder='Find'
          className='w-full border-b-2 border-b-[#4e4e4e] bg-transparent  text-white p-4 outline-none placeholder:text-[#575757] placeholder:text-center'
        />
        <button className='min-w-[98px] flex items-center justify-center bg-[#4e4e4e] text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
