import {Component, OnInit} from '@angular/core';
import {City, ForecastTimestamp, LongTermForecast} from './shared/types';
import {ForecastService} from './services/forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  defaultCity = 'vilnius';
  longTermForecastData: {};
  cities: [City];
  isReady = false;
  displayedHours: number[] = [6, 10, 14, 18, 22, 2];
  forecastDates: string[];
  displayedForecast: {};
  currentDate: string;
  selectedForecast: ForecastTimestamp;

  constructor(private forecastService: ForecastService) {
  }

  ngOnInit() {
    this.forecastService.fetchCities().subscribe(
      result => {
        this.cities = result;
        this.isReady = true;
        this.fetchLongTermForecast(this.defaultCity);
      }
    );

  }

  onItemSelect(selectedForecast) {
    this.selectedForecast = selectedForecast;
  }

  fetchLongTermForecast(city: string) {
    this.isReady = false;
    this.forecastService.fetchLongTermForecast(city).subscribe(
      forecastResponse => {
        this.longTermForecastData = forecastResponse;
        this.forecastDates = Object.keys(forecastResponse);
        this.displayedForecast = this.forecastService.getDisplayedForecast(this.forecastDates, this.displayedHours, forecastResponse);
        this.setCurrentDate();
        this.selectForecast();
        this.isReady = true;
      }
    );
  }

  setCurrentDate() {
    const monthOfFirstDate = new Date(this.forecastDates[0]).toLocaleString('default', {month: 'long'});
    const monthOfLastDate = new Date(this.forecastDates[this.forecastDates.length - 1]).toLocaleString('default', {month: 'long'});
    this.currentDate = monthOfFirstDate + ' ' +
      new Date(this.forecastDates[0]).getUTCDate() + '-' +
      // if forecastDate[0].month === forecastDate[last].month value will be 'Month day - day' else: 'Month1 day - Month2 day'
      (monthOfFirstDate === monthOfLastDate ? '' : ' ' + monthOfLastDate + ' ') +
      new Date(this.forecastDates[this.forecastDates.length - 1]).getUTCDate();
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
  }
}
