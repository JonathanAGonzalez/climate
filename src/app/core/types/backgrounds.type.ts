export type WeatherImages = {
  'clear sky': string;
  'few clouds': string;
  'scattered clouds': string;
  'broken clouds': string;
  'shower rain': string;
  'light rain': string;
  'overcast clouds': string;
  'heavy snow': string;
  rain: string;
  thunderstorm: string;
  snow: string;
  mist: string;
  default: string;
};

export const backgroundsPath: WeatherImages = {
  'clear sky': './img/sky-clean.jpg',
  'few clouds': './img/few-clouds.jpg',
  'scattered clouds': './img/scattered-clouds.jpg',
  'broken clouds': './img/few-clouds.jpg',
  'shower rain': './img/shower-rain.jpg',
  'light rain': './img/light-rain.jpg',
  'overcast clouds': './img/overcast-clouds.jpg',
  rain: './img/cloudy-rain.jpg',
  thunderstorm: './img/rainy-storm.jpg',
  snow: './img/snow.jpg',
  'heavy snow': './img/snow.jpg',
  mist: './img/snow.jpg',
  default: './img/default.jpg',
};

export type WeatherDescription = keyof WeatherImages;
