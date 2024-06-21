type LayoutColumnsProps = {
  contentFirstColumn: React.ReactNode;
  contentSecondColumn: React.ReactNode;
};

export const LayoutColumns = ({
  contentFirstColumn,
  contentSecondColumn,
}: LayoutColumnsProps) => {
  return (
    <div className='bg-cloudy-rain bg-cover bg-center'>
      <section className='grid grid-cols-12 grid-rows-6 gap-0 max-w-[1920px] mx-auto'>
        <article className='col-span-8 row-span-6 border min-h-screen'>
          {contentFirstColumn}
        </article>

        <article className='col-span-4 row-span-6 col-start-9 border min-h-screen bg-[#0000004f] backdrop-blur-sm px-[38px] pt-4'>
          {contentSecondColumn}
        </article>
      </section>
    </div>
  );
};
