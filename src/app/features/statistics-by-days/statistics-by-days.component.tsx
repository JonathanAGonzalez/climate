import { StatisticsDay } from './statistics-day.component';
import { useWeatherStore } from '@/app/core/store/weather.store';

export const StatisticsByDays = () => {
  const statisticsDays = useWeatherStore((store) => store.historyData);

  if (!statisticsDays) return;

  return (
    <section className='flex gap-4 justify-center items-start pt-12'>
      {statisticsDays.map((statistics, i) => (
        <StatisticsDay key={i} statisticDay={statistics} />
      ))}
    </section>
  );
};
