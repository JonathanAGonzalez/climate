import { Divider } from '@/app/core/components/divider/divider.component';
import { ListItems } from '../search/component/search-last-searched.component';
import { Search } from '../search/component/search.component';
import { StatisticsList } from '../statistics/statistics-list.component';
import { StatisticsByDays } from '../statistics-by-days/statistics-by-days.component';

export const WeatherList = () => {
  return (
    <>
      <Search />
      <ListItems
        rulesCss='h-[257px] py-2 overflow-auto'
        textGrayActive
        withHover
      />
      <Divider />
      <StatisticsList />

      <StatisticsByDays />
    </>
  );
};
