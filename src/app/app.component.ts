import {Component, OnInit} from '@angular/core';
import {ForecastTimestamp} from './shared/types';
import {ForecastService} from './services/forecast.service';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private forecastService: ForecastService) {
  }

  ngOnInit() {
    let forecasts = this.forecastService.fetchLongTermForecast('vilnius').subscribe(
      result => {
        console.log(result);
      }
    );
    console.log(forecasts | async);

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
}
