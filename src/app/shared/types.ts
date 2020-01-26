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
  forecastTimeUtc: string;
  airTemperature: number;
  windSpeed: number;
  windGust: number;
  windDirection: number;
  cloudCover: number;
  seaLevelPressure: number;
  totalPrecipitation: number;
  conditionCode: string;
  date?: string;
  time?: number;
  selected?: boolean;
  isNow?: boolean;
}

export interface LongTermForecast {
  place: Place;
  forecastType: string;
  forecastCreationTimeUtc: string;
  forecastTimestamps: [ForecastTimestamp];
}
