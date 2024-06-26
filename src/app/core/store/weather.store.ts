import { create } from 'zustand';
import axios from 'axios';
import { HistoryData } from '../types/history.type';
import { WeatherData } from '../types/response.type';

interface WeatherStore {
  city: string;
  weatherData: WeatherData | null;
  historyData: HistoryData[] | null;
  country: string;
  latestSearches: string[];
  onChangeCity: (v: string) => void;
  onClearCity: () => void;
  onGetWeatherData: (city: string) => Promise<WeatherData>;
  onGetWeatherHistory: (lat: number, lon: number) => Promise<HistoryData[]>;
  onSetLatestSearch: (value: string) => void;
  onSelectedValue: (value: string) => void;
  onDeleteLatestSearch: (value: string) => void;
}

type City = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export const useWeatherStore = create<WeatherStore>()((set) => ({
  city: '',
  weatherData: null,
  historyData: null,
  country: '',
  latestSearches: [],
  onChangeCity: (value) => set({ city: value }),
  onClearCity: () => set({ city: '' }),
  onGetWeatherData: async (city: string) => {
    const url = String(process.env.NEXT_PUBLIC_URL_WEATHER);

    const result: { data: WeatherData } = await axios.get(url, {
      params: {
        q: city,
      },
    });
    set({
      weatherData: result.data,
    });

    return result.data;
  },
  onGetWeatherHistory: async (
    lat: number,
    lon: number
  ): Promise<HistoryData[]> => {
    const url = String(process.env.NEXT_PUBLIC_URL_HISTORY);
    const result: {
      data: {
        list: HistoryData[];
        city: City;
      };
    } = await axios(url, {
      params: {
        lat: lat,
        lon: lon,
      },
    });

    const mappedHistoryData: HistoryData[] = result.data.list.filter(
      (_: HistoryData, i: number) => i <= 2
    );

    set({
      historyData: mappedHistoryData,
      country: result.data.city.country,
    });

    return result.data.list;
  },
  onSetLatestSearch: (value: string) => {
    set((store) => ({
      latestSearches: [...store.latestSearches, value],
    }));
  },
  onSelectedValue: (value: string) => {
    set({
      city: value,
    });
  },
  onDeleteLatestSearch: (value: string) => {
    set((store) => ({
      latestSearches: store.latestSearches.filter((search) => search !== value),
    }));
  },
}));
