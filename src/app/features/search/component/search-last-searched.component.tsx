import { useWeatherStore } from '@/app/core/store/weather.store';

type ListItemsProps = {
  textGrayActive?: boolean;
  rulesCss?: string;
  withHover?: boolean;
};

export const ListItems = ({
  textGrayActive,
  rulesCss,
  withHover = false,
}: ListItemsProps) => {
  const list = useWeatherStore((store) => store.latestSearches);
  const onSelectedValue = useWeatherStore((store) => store.onSelectedValue);
  const onDeleteLatestSearch = useWeatherStore(
    (store) => store.onDeleteLatestSearch
  );

  return (
    <article className={rulesCss}>
      <ul className='gap-4 grid overflow-hidden'>
        {list.map((item, i) => (
          <li
            className={`${
              textGrayActive ? 'text-[#B0ADAD]' : 'text-white'
            } items-center gap-4 flex`}
            key={i}
          >
            <button
              onClick={() => onSelectedValue(item)}
              className={withHover ? 'hover:text-white' : 'cursor-default'}
            >
              {item}
            </button>
            <button onClick={() => onDeleteLatestSearch(item)}>X</button>
          </li>
        ))}
      </ul>
    </article>
  );
};
