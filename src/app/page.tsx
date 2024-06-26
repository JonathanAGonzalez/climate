'use client';
import { Toaster } from 'sonner';
import { LayoutColumns } from './core/layout/layout-columns.component';
import { WatherInformation } from './features/weather-information/weather-information.component';
import { WeatherList } from './features/weather-information/weather-list.component';

export default function Home() {
  return (
    <main>
      <Toaster richColors position='top-center' />
      <LayoutColumns
        contentFirstColumn={<WatherInformation />}
        contentSecondColumn={<WeatherList />}
      />
    </main>
  );
}
