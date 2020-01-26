import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ForecastTimestamp} from '../shared/types';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  forecastData = {
    'place': {
      'code': 'vilnius',
      'name': 'Vilnius',
      'administrativeDivision': 'Vilniaus miesto savivaldybė',
      'country': 'Lietuva',
      'countryCode': 'LT',
      'coordinates': {
        'latitude': 54.687046,
        'longitude': 25.282911
      }
    },
    'forecastType': 'long-term',
    'forecastCreationTimeUtc': '2020-01-19 14:00:04',
    'forecastTimestamps': [
      {
        'forecastTimeUtc': '2020-01-19 16:00:00',
        'airTemperature': 2.1,
        'windSpeed': 3,
        'windGust': 4,
        'windDirection': 228,
        'cloudCover': 25,
        'seaLevelPressure': 1032,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-19 17:00:00',
        'airTemperature': 1.8,
        'windSpeed': 2,
        'windGust': 4,
        'windDirection': 235,
        'cloudCover': 16,
        'seaLevelPressure': 1033,
        'totalPrecipitation': 0,
        'conditionCode': 'clear'
      },
      {
        'forecastTimeUtc': '2020-01-19 18:00:00',
        'airTemperature': 1.8,
        'windSpeed': 2,
        'windGust': 4,
        'windDirection': 231,
        'cloudCover': 35,
        'seaLevelPressure': 1034,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-19 19:00:00',
        'airTemperature': 1.9,
        'windSpeed': 3,
        'windGust': 5,
        'windDirection': 247,
        'cloudCover': 15,
        'seaLevelPressure': 1034,
        'totalPrecipitation': 0,
        'conditionCode': 'clear'
      },
      {
        'forecastTimeUtc': '2020-01-19 20:00:00',
        'airTemperature': 1.8,
        'windSpeed': 3,
        'windGust': 5,
        'windDirection': 241,
        'cloudCover': 19,
        'seaLevelPressure': 1035,
        'totalPrecipitation': 0,
        'conditionCode': 'clear'
      },
      {
        'forecastTimeUtc': '2020-01-19 21:00:00',
        'airTemperature': 2,
        'windSpeed': 3,
        'windGust': 5,
        'windDirection': 238,
        'cloudCover': 27,
        'seaLevelPressure': 1035,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-19 22:00:00',
        'airTemperature': 2.1,
        'windSpeed': 3,
        'windGust': 6,
        'windDirection': 260,
        'cloudCover': 49,
        'seaLevelPressure': 1036,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-19 23:00:00',
        'airTemperature': 2.1,
        'windSpeed': 2,
        'windGust': 6,
        'windDirection': 257,
        'cloudCover': 59,
        'seaLevelPressure': 1036,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 00:00:00',
        'airTemperature': 2.3,
        'windSpeed': 4,
        'windGust': 7,
        'windDirection': 276,
        'cloudCover': 20,
        'seaLevelPressure': 1037,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 01:00:00',
        'airTemperature': 2.2,
        'windSpeed': 4,
        'windGust': 7,
        'windDirection': 259,
        'cloudCover': 38,
        'seaLevelPressure': 1037,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 02:00:00',
        'airTemperature': 1.9,
        'windSpeed': 4,
        'windGust': 8,
        'windDirection': 291,
        'cloudCover': 34,
        'seaLevelPressure': 1037,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 03:00:00',
        'airTemperature': 1.8,
        'windSpeed': 3,
        'windGust': 7,
        'windDirection': 249,
        'cloudCover': 48,
        'seaLevelPressure': 1037,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 04:00:00',
        'airTemperature': 1.5,
        'windSpeed': 4,
        'windGust': 7,
        'windDirection': 275,
        'cloudCover': 33,
        'seaLevelPressure': 1037,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 05:00:00',
        'airTemperature': 1.5,
        'windSpeed': 4,
        'windGust': 7,
        'windDirection': 276,
        'cloudCover': 38,
        'seaLevelPressure': 1038,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 06:00:00',
        'airTemperature': 1.4,
        'windSpeed': 4,
        'windGust': 7,
        'windDirection': 280,
        'cloudCover': 28,
        'seaLevelPressure': 1038,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 07:00:00',
        'airTemperature': 1,
        'windSpeed': 4,
        'windGust': 8,
        'windDirection': 266,
        'cloudCover': 25,
        'seaLevelPressure': 1038,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 08:00:00',
        'airTemperature': 1,
        'windSpeed': 4,
        'windGust': 8,
        'windDirection': 261,
        'cloudCover': 29,
        'seaLevelPressure': 1038,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 09:00:00',
        'airTemperature': 1.2,
        'windSpeed': 4,
        'windGust': 8,
        'windDirection': 258,
        'cloudCover': 33,
        'seaLevelPressure': 1038,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 10:00:00',
        'airTemperature': 1.4,
        'windSpeed': 4,
        'windGust': 8,
        'windDirection': 263,
        'cloudCover': 32,
        'seaLevelPressure': 1038,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 11:00:00',
        'airTemperature': 1.6,
        'windSpeed': 5,
        'windGust': 9,
        'windDirection': 262,
        'cloudCover': 32,
        'seaLevelPressure': 1038,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 12:00:00',
        'airTemperature': 1.8,
        'windSpeed': 5,
        'windGust': 10,
        'windDirection': 258,
        'cloudCover': 38,
        'seaLevelPressure': 1037,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 13:00:00',
        'airTemperature': 1.6,
        'windSpeed': 5,
        'windGust': 9,
        'windDirection': 264,
        'cloudCover': 34,
        'seaLevelPressure': 1037,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 14:00:00',
        'airTemperature': 1.6,
        'windSpeed': 6,
        'windGust': 10,
        'windDirection': 258,
        'cloudCover': 37,
        'seaLevelPressure': 1037,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 15:00:00',
        'airTemperature': 1.2,
        'windSpeed': 5,
        'windGust': 10,
        'windDirection': 255,
        'cloudCover': 31,
        'seaLevelPressure': 1036,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 16:00:00',
        'airTemperature': 1,
        'windSpeed': 6,
        'windGust': 10,
        'windDirection': 252,
        'cloudCover': 25,
        'seaLevelPressure': 1036,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 17:00:00',
        'airTemperature': 0.7,
        'windSpeed': 6,
        'windGust': 10,
        'windDirection': 254,
        'cloudCover': 34,
        'seaLevelPressure': 1035,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 18:00:00',
        'airTemperature': 0.6,
        'windSpeed': 6,
        'windGust': 10,
        'windDirection': 252,
        'cloudCover': 28,
        'seaLevelPressure': 1035,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 19:00:00',
        'airTemperature': 0.5,
        'windSpeed': 6,
        'windGust': 10,
        'windDirection': 247,
        'cloudCover': 23,
        'seaLevelPressure': 1034,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 20:00:00',
        'airTemperature': 0.5,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 249,
        'cloudCover': 32,
        'seaLevelPressure': 1034,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 21:00:00',
        'airTemperature': 0.6,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 249,
        'cloudCover': 40,
        'seaLevelPressure': 1033,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 22:00:00',
        'airTemperature': 0.6,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 247,
        'cloudCover': 57,
        'seaLevelPressure': 1032,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-20 23:00:00',
        'airTemperature': 0.6,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 245,
        'cloudCover': 67,
        'seaLevelPressure': 1032,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-21 00:00:00',
        'airTemperature': 0.8,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 246,
        'cloudCover': 68,
        'seaLevelPressure': 1031,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-21 01:00:00',
        'airTemperature': 1,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 246,
        'cloudCover': 71,
        'seaLevelPressure': 1030,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-21 02:00:00',
        'airTemperature': 1.1,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 247,
        'cloudCover': 74,
        'seaLevelPressure': 1029,
        'totalPrecipitation': 0.1,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 03:00:00',
        'airTemperature': 1.3,
        'windSpeed': 7,
        'windGust': 12,
        'windDirection': 247,
        'cloudCover': 76,
        'seaLevelPressure': 1028,
        'totalPrecipitation': 0.1,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 04:00:00',
        'airTemperature': 1.6,
        'windSpeed': 7,
        'windGust': 12,
        'windDirection': 253,
        'cloudCover': 77,
        'seaLevelPressure': 1027,
        'totalPrecipitation': 0.1,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 05:00:00',
        'airTemperature': 1.9,
        'windSpeed': 6,
        'windGust': 12,
        'windDirection': 254,
        'cloudCover': 85,
        'seaLevelPressure': 1027,
        'totalPrecipitation': 0.1,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 06:00:00',
        'airTemperature': 1.8,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 253,
        'cloudCover': 88,
        'seaLevelPressure': 1026,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-21 07:00:00',
        'airTemperature': 1.9,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 253,
        'cloudCover': 86,
        'seaLevelPressure': 1025,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-21 08:00:00',
        'airTemperature': 2.2,
        'windSpeed': 7,
        'windGust': 12,
        'windDirection': 256,
        'cloudCover': 85,
        'seaLevelPressure': 1025,
        'totalPrecipitation': 0.1,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 09:00:00',
        'airTemperature': 2.3,
        'windSpeed': 7,
        'windGust': 12,
        'windDirection': 256,
        'cloudCover': 77,
        'seaLevelPressure': 1024,
        'totalPrecipitation': 0.1,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 10:00:00',
        'airTemperature': 2.6,
        'windSpeed': 7,
        'windGust': 13,
        'windDirection': 256,
        'cloudCover': 73,
        'seaLevelPressure': 1023,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-21 11:00:00',
        'airTemperature': 2.7,
        'windSpeed': 8,
        'windGust': 14,
        'windDirection': 258,
        'cloudCover': 72,
        'seaLevelPressure': 1023,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-21 12:00:00',
        'airTemperature': 2.6,
        'windSpeed': 7,
        'windGust': 14,
        'windDirection': 258,
        'cloudCover': 77,
        'seaLevelPressure': 1022,
        'totalPrecipitation': 0.1,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 13:00:00',
        'airTemperature': 2.5,
        'windSpeed': 7,
        'windGust': 13,
        'windDirection': 257,
        'cloudCover': 80,
        'seaLevelPressure': 1021,
        'totalPrecipitation': 0.1,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 14:00:00',
        'airTemperature': 2.6,
        'windSpeed': 7,
        'windGust': 13,
        'windDirection': 259,
        'cloudCover': 79,
        'seaLevelPressure': 1021,
        'totalPrecipitation': 0.2,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 15:00:00',
        'airTemperature': 2.9,
        'windSpeed': 7,
        'windGust': 12,
        'windDirection': 262,
        'cloudCover': 75,
        'seaLevelPressure': 1020,
        'totalPrecipitation': 0.3,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 16:00:00',
        'airTemperature': 3.1,
        'windSpeed': 7,
        'windGust': 13,
        'windDirection': 266,
        'cloudCover': 80,
        'seaLevelPressure': 1020,
        'totalPrecipitation': 0.2,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 17:00:00',
        'airTemperature': 3.2,
        'windSpeed': 7,
        'windGust': 13,
        'windDirection': 270,
        'cloudCover': 80,
        'seaLevelPressure': 1019,
        'totalPrecipitation': 0.3,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 18:00:00',
        'airTemperature': 3.5,
        'windSpeed': 7,
        'windGust': 12,
        'windDirection': 274,
        'cloudCover': 83,
        'seaLevelPressure': 1019,
        'totalPrecipitation': 0.2,
        'conditionCode': 'light-rain'
      },
      {
        'forecastTimeUtc': '2020-01-21 21:00:00',
        'airTemperature': 5.5,
        'windSpeed': 7,
        'windGust': 13,
        'windDirection': 284,
        'cloudCover': 100,
        'seaLevelPressure': 1018,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-22 00:00:00',
        'airTemperature': 5.2,
        'windSpeed': 5,
        'windGust': 11,
        'windDirection': 290,
        'cloudCover': 100,
        'seaLevelPressure': 1017,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-22 03:00:00',
        'airTemperature': 4.5,
        'windSpeed': 4,
        'windGust': 9,
        'windDirection': 276,
        'cloudCover': 100,
        'seaLevelPressure': 1014,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-22 06:00:00',
        'airTemperature': 3.9,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 271,
        'cloudCover': 100,
        'seaLevelPressure': 1010,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-22 09:00:00',
        'airTemperature': 3.6,
        'windSpeed': 6,
        'windGust': 13,
        'windDirection': 297,
        'cloudCover': 26,
        'seaLevelPressure': 1009,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-22 12:00:00',
        'airTemperature': 3.3,
        'windSpeed': 6,
        'windGust': 12,
        'windDirection': 297,
        'cloudCover': 46,
        'seaLevelPressure': 1009,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-22 15:00:00',
        'airTemperature': 1.2,
        'windSpeed': 6,
        'windGust': 13,
        'windDirection': 308,
        'cloudCover': 58,
        'seaLevelPressure': 1011,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-22 18:00:00',
        'airTemperature': 0.6,
        'windSpeed': 7,
        'windGust': 13,
        'windDirection': 306,
        'cloudCover': 65,
        'seaLevelPressure': 1012,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-22 21:00:00',
        'airTemperature': 1,
        'windSpeed': 7,
        'windGust': 15,
        'windDirection': 326,
        'cloudCover': 60,
        'seaLevelPressure': 1015,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-23 00:00:00',
        'airTemperature': 0.6,
        'windSpeed': 6,
        'windGust': 14,
        'windDirection': 328,
        'cloudCover': 45,
        'seaLevelPressure': 1018,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-23 03:00:00',
        'airTemperature': -0.7,
        'windSpeed': 6,
        'windGust': 12,
        'windDirection': 306,
        'cloudCover': 72,
        'seaLevelPressure': 1020,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-23 06:00:00',
        'airTemperature': -0.2,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 313,
        'cloudCover': 77,
        'seaLevelPressure': 1022,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-23 09:00:00',
        'airTemperature': 0.6,
        'windSpeed': 6,
        'windGust': 12,
        'windDirection': 321,
        'cloudCover': 36,
        'seaLevelPressure': 1025,
        'totalPrecipitation': 0,
        'conditionCode': 'isolated-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-23 12:00:00',
        'airTemperature': 1.6,
        'windSpeed': 6,
        'windGust': 14,
        'windDirection': 327,
        'cloudCover': 79,
        'seaLevelPressure': 1026,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-23 15:00:00',
        'airTemperature': 0.2,
        'windSpeed': 3,
        'windGust': 12,
        'windDirection': 280,
        'cloudCover': 18,
        'seaLevelPressure': 1026,
        'totalPrecipitation': 0,
        'conditionCode': 'clear'
      },
      {
        'forecastTimeUtc': '2020-01-23 18:00:00',
        'airTemperature': -1,
        'windSpeed': 4,
        'windGust': 7,
        'windDirection': 256,
        'cloudCover': 19,
        'seaLevelPressure': 1025,
        'totalPrecipitation': 0,
        'conditionCode': 'clear'
      },
      {
        'forecastTimeUtc': '2020-01-23 21:00:00',
        'airTemperature': 0,
        'windSpeed': 4,
        'windGust': 8,
        'windDirection': 250,
        'cloudCover': 99,
        'seaLevelPressure': 1024,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-24 00:00:00',
        'airTemperature': -0.1,
        'windSpeed': 5,
        'windGust': 9,
        'windDirection': 239,
        'cloudCover': 99,
        'seaLevelPressure': 1023,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-24 03:00:00',
        'airTemperature': 1.3,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 246,
        'cloudCover': 99,
        'seaLevelPressure': 1021,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-24 06:00:00',
        'airTemperature': 2.2,
        'windSpeed': 6,
        'windGust': 11,
        'windDirection': 252,
        'cloudCover': 100,
        'seaLevelPressure': 1019,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-24 09:00:00',
        'airTemperature': 3,
        'windSpeed': 7,
        'windGust': 13,
        'windDirection': 252,
        'cloudCover': 100,
        'seaLevelPressure': 1019,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-24 12:00:00',
        'airTemperature': 3.1,
        'windSpeed': 7,
        'windGust': 14,
        'windDirection': 254,
        'cloudCover': 100,
        'seaLevelPressure': 1018,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-24 15:00:00',
        'airTemperature': 2.5,
        'windSpeed': 6,
        'windGust': 13,
        'windDirection': 255,
        'cloudCover': 99,
        'seaLevelPressure': 1018,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-24 18:00:00',
        'airTemperature': 2.1,
        'windSpeed': 6,
        'windGust': 12,
        'windDirection': 249,
        'cloudCover': 95,
        'seaLevelPressure': 1017,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-24 21:00:00',
        'airTemperature': 1.2,
        'windSpeed': 5,
        'windGust': 11,
        'windDirection': 245,
        'cloudCover': 95,
        'seaLevelPressure': 1017,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-25 00:00:00',
        'airTemperature': 0.1,
        'windSpeed': 4,
        'windGust': 10,
        'windDirection': 244,
        'cloudCover': 58,
        'seaLevelPressure': 1017,
        'totalPrecipitation': 0,
        'conditionCode': 'scattered-clouds'
      },
      {
        'forecastTimeUtc': '2020-01-25 06:00:00',
        'airTemperature': -2.5,
        'windSpeed': 3,
        'windGust': 8,
        'windDirection': 222,
        'cloudCover': 93,
        'seaLevelPressure': 1015,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-25 12:00:00',
        'airTemperature': 1.5,
        'windSpeed': 3,
        'windGust': 7,
        'windDirection': 229,
        'cloudCover': 99,
        'seaLevelPressure': 1014,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-25 18:00:00',
        'airTemperature': -1.6,
        'windSpeed': 3,
        'windGust': 6,
        'windDirection': 228,
        'cloudCover': 100,
        'seaLevelPressure': 1014,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-26 00:00:00',
        'airTemperature': -2.1,
        'windSpeed': 3,
        'windGust': 6,
        'windDirection': 249,
        'cloudCover': 100,
        'seaLevelPressure': 1014,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-26 06:00:00',
        'airTemperature': 0.4,
        'windSpeed': 4,
        'windGust': 8,
        'windDirection': 252,
        'cloudCover': 98,
        'seaLevelPressure': 1014,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      },
      {
        'forecastTimeUtc': '2020-01-26 12:00:00',
        'airTemperature': 2.1,
        'windSpeed': 5,
        'windGust': 11,
        'windDirection': 236,
        'cloudCover': 100,
        'seaLevelPressure': 1014,
        'totalPrecipitation': 0,
        'conditionCode': 'overcast'
      }
    ]
  };

  displayedHours = [6, 10, 14, 18, 22, 2];
  arrayWitDate = [];

  groupedArrayByDate = {};

  forecastDates = [];

  displayedForecast = {};

  currentDate;

  @Output() selectedForecast: EventEmitter<ForecastTimestamp> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log(this.forecastData.forecastTimestamps);

    const newArr = this.splitTimestampProperty(this.forecastData.forecastTimestamps);
    this.arrayWitDate = newArr;
    console.log(newArr);

    this.groupedArrayByDate = this.groupeArrayByProperty(newArr, 'date');
    console.log(this.groupedArrayByDate);
    this.forecastDates = Object.keys(this.groupedArrayByDate);

    this.setCurrentDate();

    this.remapDisplayedForecast();
  }

  onItemClick(forecast) {
    console.log(forecast);
    this.forecastDates.forEach(date => {
      this.displayedForecast[date].forEach(forecastDetails => {
        forecastDetails.selected = false;
      });
    });
    forecast.selected = true;
    this.selectedForecast.emit(forecast);
  }

  setCurrentDate() {
    this.currentDate = new Date(this.forecastDates[0]).toLocaleString('default', {month: 'long'}) +
      ' ' + new Date(this.forecastDates[0]).getUTCDate() +
      '-' + new Date(this.forecastDates[this.forecastDates.length - 1]).getUTCDate();
  }

  remapDisplayedForecast() {
    const displayedObject = {};
    this.forecastDates.forEach(date => {
      this.displayedHours.forEach(hour => {
        let matchedForecast;
        this.groupedArrayByDate[date].forEach(forecast => {
          if (forecast.time === hour) {
            matchedForecast = forecast;
          }
        });
        displayedObject[date] = [...displayedObject[date] || [], matchedForecast || {time: hour}];
      });
    });
    console.log(displayedObject);
    this.displayedForecast = displayedObject;
  }

  splitTimestampProperty(array) {
    return array.map(timestamp => ({
      ...timestamp,
      date: timestamp.forecastTimeUtc.substring(0, 10),
      time: +timestamp.forecastTimeUtc.substring(11, 13)
    }));
  }

  groupeArrayByProperty(array, key) {
    const groupedArray = {};
    const keys = [];
    array.forEach(element => {
      groupedArray[element[key]] = groupedArray[element[key]] || [];
      groupedArray[element[key]].push(element);
    });
    return groupedArray;
  }

}
