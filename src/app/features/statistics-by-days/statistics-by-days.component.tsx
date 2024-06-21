import { StatisticsDay } from './statistics-day.component';

export const StatisticsByDays = () => {
  return (
    <section className='flex gap-4 justify-center pt-12'>
      <StatisticsDay />
      <StatisticsDay />
      <StatisticsDay />
    </section>
  );
};
