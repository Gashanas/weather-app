import {Component, Input, OnInit} from '@angular/core';
import {forecastDetails} from '../shared/constants';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {

  icons = forecastDetails;

  items2: any[] = [{id: 0, payload: {label: 'Tom'}},
    {id: 1, payload: {label: 'John'}},
    {id: 2, payload: {label: 'Lisa'}},
    {id: 3, payload: {label: 'Js'}},
    {id: 4, payload: {label: 'Java'}},
    {id: 5, payload: {label: 'c'}},
    {id: 6, payload: {label: 'vc'}}
  ];
  config2: any = {'placeholder': 'City', 'sourceField': ['payload', 'label']};

  items = [
    {
      'code': 'abromiskes',
      'name': 'Abromiškės',
      'administrativeDivision': 'Elektrėnų savivaldybė',
      'countryCode': 'LT'
    },
    {
      'code': 'acokavai',
      'name': 'Acokavai',
      'administrativeDivision': 'Radviliškio rajono savivaldybė',
      'countryCode': 'LT'
    },
    {
      'code': 'adakavas',
      'name': 'Adakavas',
      'administrativeDivision': 'Tauragės rajono savivaldybė',
      'countryCode': 'LT'
    }];

  @Input() forecast = {
    forecastTimeUtc: '2020-01-19 18:00:00',
    airTemperature: 1.8,
    windSpeed: 2,
    windGust: 4,
    windDirection: 231,
    cloudCover: 35,
    seaLevelPressure: 1034,
    totalPrecipitation: 0,
    conditionCode: 'isolated-clouds',
    date: '2020-01-19',
    time: 18
  };

  constructor() {
  }

  ngOnInit() {
  }

}
