import { Divider } from './core/divider/divider.component';
import { LayoutColumns } from './core/layout/layout-columns.component';
import { ListItems } from './features/search/component/search-last-searched.component';
import { Search } from './features/search/component/search.component';
import { StatisticsByDays } from './features/statistics-by-days/statistics-by-days.component';
import { StatisticsDay } from './features/statistics-by-days/statistics-day.component';
const MOCK_LAST_SEARCHED = [
  {
    id: 1,
    name: 'Buenos Aires',
  },
  {
    id: 2,
    name: 'Paris',
  },
  {
    id: 3,
    name: 'Barcelona',
  },
  {
    id: 4,
    name: 'Brasil',
  },
];

export default function Home() {
  return (
    <main>
      <LayoutColumns
        contentFirstColumn={<div>1</div>}
        contentSecondColumn={
          <>
            <Search />
            <ListItems
              list={MOCK_LAST_SEARCHED}
              textGrayActive
              rulesCss='h-[357px] pt-9'
            />
            <Divider />
            <ListItems list={MOCK_LAST_SEARCHED} rulesCss='pt-4' />
            <StatisticsByDays />
          </>
        }
      />
    </main>
  );
}
