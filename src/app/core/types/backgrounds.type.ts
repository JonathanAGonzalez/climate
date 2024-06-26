export type WeatherImages = {
  'clear sky': string;
  'few clouds': string;
  'scattered clouds': string;
  'broken clouds': string;
  'shower rain': string;
  'light rain': string;
  'overcast clouds': string;
  rain: string;
  thunderstorm: string;
  snow: string;
  mist: string;
};

export const backgroundsPath: WeatherImages = {
  'clear sky': './img/sky-clean.webp',
  'few clouds': './img/few-clouds.webp',
  'scattered clouds': './img/scattered-clouds.webp',
  'broken clouds': './img/few-clouds.webp',
  'shower rain': './img/shower-rain.webp',
  'light rain': './img/light-rain.webp',
  'overcast clouds': './img/overcast-clouds.webp',
  rain: './img/cloudy-rain.webp',
  thunderstorm: './img/rainy-storm.webp',
  snow: './img/snow.webp',
  mist: './img/snow.webp',
};

export type WeatherDescription = keyof WeatherImages;
