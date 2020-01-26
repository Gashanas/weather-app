export interface City {
  code: string;
  name: string;
  administrativeDivision: string;
  countryCode: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Place {
  code: string;
  name: string;
  administrativeDivision: string;
  country: string;
  countryCode: string;
  coordinates: Coordinates;
}

export interface ForecastTimestamp {
  forecastTimeUtc: '2020-01-19 16:00:00',
  airTemperature: number;
  windSpeed: number;
  windGust: number;
  windDirection: number;
  cloudCover: number;
  seaLevelPressure: number;
  totalPrecipitation: number;
  conditionCode: string;
}

export interface LongTermForecast {
  place: Place;
  forecastType: string;
  forecastCreationTimeUtc: string;
  forecastTimestamps: [ForecastTimestamp];
}
