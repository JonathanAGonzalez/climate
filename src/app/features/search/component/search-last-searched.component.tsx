import { classnames } from 'tailwindcss-classnames';

type ListItemsProps = {
  list: {
    id: number;
    name: string;
  }[];
  textGrayActive?: boolean;
  rulesCss?: string;
};

export const ListItems = ({
  list,
  textGrayActive,
  rulesCss,
}: ListItemsProps) => {
  return (
    <article className={rulesCss}>
      <ul className='gap-4 grid'>
        {list.map((item) => (
          <li
            className={textGrayActive ? 'text-[#B0ADAD]' : 'text-white'}
            key={item?.id}
          >
            <button className='hover:text-white'>{item?.name}</button>
          </li>
        ))}
      </ul>
    </article>
  );
};
