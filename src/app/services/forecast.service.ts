import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {meteoApiUrl} from '../shared/constants';
import {City, LongTermForecast, Place} from '../shared/types';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  // using proxy because origin 'http://localhost:4200' has been blocked by CORS policy
  proxy = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  fetchCities() {
    return this.http.get<[City]>(this.proxy + meteoApiUrl + '/places');
  }

  fetchLongTermForecast(city: string) {
    return this.http.get<LongTermForecast>(this.proxy + meteoApiUrl + '/places/' + city + '/forecasts/long-term').pipe(
      map((response: LongTermForecast) => {
        return this.groupArrayByProperty(this.splitTimestampProperty(response.forecastTimestamps), 'date');
      })
    );
  }

  getDisplayedForecast(dates, displayedHours, groupedForecastObject) {
    const displayedObject = {};
    dates.forEach(date => {
      displayedHours.forEach(hour => {
        let matchedForecast;
        groupedForecastObject[date].forEach(forecast => {
          if (forecast.time === hour) {
            matchedForecast = forecast;
          }
        });
        displayedObject[date] = [...displayedObject[date] || [], matchedForecast || {time: hour}];
      });
    });
    return displayedObject;
  }

  private splitTimestampProperty(array) {
    return array.map(timestamp => ({
      ...timestamp,
      date: timestamp.forecastTimeUtc.substring(0, 10),
      time: +timestamp.forecastTimeUtc.substring(11, 13)
    }));
  }

  private groupArrayByProperty(array, key) {
    const groupedArray = {};
    const keys = [];
    array.forEach(element => {
      groupedArray[element[key]] = groupedArray[element[key]] || [];
      groupedArray[element[key]].push(element);
    });
    return groupedArray;
  }
}
