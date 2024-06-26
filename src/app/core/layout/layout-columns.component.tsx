import { useWeatherStore } from '../store/weather.store';
import { WeatherDescription, backgroundsPath } from '../types/backgrounds.type';

type LayoutColumnsProps = {
  contentFirstColumn: React.ReactNode;
  contentSecondColumn: React.ReactNode;
};

function isWeatherDescription(
  description: string
): description is WeatherDescription {
  return description in backgroundsPath;
}

export const LayoutColumns = ({
  contentFirstColumn,
  contentSecondColumn,
}: LayoutColumnsProps) => {
  const weatherData = useWeatherStore((store) => store.weatherData);
  const description = weatherData?.weather[0]?.description || '';
  const background = isWeatherDescription(description)
    ? backgroundsPath[description]
    : backgroundsPath.default;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${background})`,
        backgroundColor: '#222',
      }}
      className='bg-cover bg-center'
    >
      <section className='grid grid-cols-12 grid-rows-6 gap-0 max-w-[1920px] mx-auto'>
        <article className='col-span-12 md:col-span-8 row-span-6 min-h-screen '>
          {contentFirstColumn}
        </article>

        <article className='hidden md:block  col-span-12 md:col-span-4 row-span-6 md:col-start-9 min-h-screen bg-[#0000004f] backdrop-blur-sm px-[38px] pt-4'>
          {contentSecondColumn}
        </article>
      </section>
    </div>
  );
};
