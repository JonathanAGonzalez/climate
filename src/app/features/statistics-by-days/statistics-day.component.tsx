import { HistoryData } from '@/app/core/types/history.type';
import { formatTemperature } from '@/app/core/utils/fortmatTemperature';

type StatisticsByDaysProps = {
  statisticDay: HistoryData;
};

export const StatisticsDay = ({ statisticDay }: StatisticsByDaysProps) => {
  const datetime = statisticDay.dt_txt;
  const time = datetime.substring(11, 16);
  const temperature = formatTemperature(statisticDay.main.temp);
  const img = `https://openweathermap.org/img/wn/${statisticDay.weather[0].icon}@2x.png`;
  const timeToShow = datetime.split(' ');

  return (
    <article className='flex flex-col justify-center items-center w-[79px] text-[#f3f3f3]'>
      <h2>{time}h</h2>
      <h3 className='text-xs'>{timeToShow[0]}</h3>
      <img src={img} alt='Image ' />
      <p>{temperature} c</p>
    </article>
  );
};
