import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {meteoApiUrl} from '../shared/constants';
import {LongTermForecast, Place} from '../shared/types';
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
    return this.http.get<Place>(this.proxy + meteoApiUrl + '/places');
  }

  fetchLongTermForecast(city: string) {
    return this.http.get<LongTermForecast>(this.proxy + meteoApiUrl + '/places/' + city + '/forecasts/long-term').pipe(
      map(response => {
        console.log(response);
      })
    );
  }
}
