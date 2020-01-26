import {Component, OnInit} from '@angular/core';
import {City, ForecastTimestamp} from './shared/types';
import {ForecastService} from './services/forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  defaultCity = 'vilnius';
  longTermForecastData;
  cities: [City];
  isReady = false;
  displayedHours: number[] = [6, 10, 14, 18, 22, 2];
  forecastDates: string[];
  displayedForecast: {};
  currentDate: string;

  constructor(private forecastService: ForecastService) {
  }

  ngOnInit() {
    this.forecastService.fetchCities().subscribe(
      result => {
        console.log(result);
        this.cities = result;
        this.isReady = true;
        this.fetchLongTermForecast(this.defaultCity);
      }
    );

  }

  title = 'weather-app';
  selectedForecast: ForecastTimestamp = {
    forecastTimeUtc: '2020-01-19 18:00:00',
    airTemperature: 1,
    windSpeed: 2,
    windGust: 4,
    windDirection: 231,
    cloudCover: 35,
    seaLevelPressure: 1034,
    totalPrecipitation: 1,
    conditionCode: 'isolated-clouds',
    date: '2020-01-19',
    time: 18
  };

  onItemSelect(selectedForecast) {
    this.selectedForecast = selectedForecast;
  }

  onCitySelect(city: string) {
    console.log(city);
    this.fetchLongTermForecast(city);
  }

  fetchLongTermForecast(city: string) {
    this.isReady = false;
    this.forecastService.fetchLongTermForecast(city).subscribe(
      forecastResponse => {
        console.log('res', forecastResponse);
        this.longTermForecastData = forecastResponse;
        this.forecastDates = Object.keys(forecastResponse);
        this.displayedForecast = this.forecastService.getDisplayedForecast(this.forecastDates, this.displayedHours, forecastResponse);
        console.log('long:', this.longTermForecastData);
        console.log(this.displayedForecast);
        this.setCurrentDate();
        this.selectForecast();
        this.isReady = true;
      }
    );
  }

  setCurrentDate() {
    this.currentDate = new Date(this.forecastDates[0]).toLocaleString('default', {month: 'long'}) +
      ' ' + new Date(this.forecastDates[0]).getUTCDate() +
      '-' + new Date(this.forecastDates[this.forecastDates.length - 1]).getUTCDate();
  }

  selectForecast() {
    this.selectedForecast = this.displayedForecast[this.forecastDates[0]].find(
      forecast => {
        if (forecast && forecast.date) {
          forecast.selected = true;
          forecast.isNow = true;
          return forecast;
        }
      }
    );
    console.log(this.selectedForecast);
  }
}
