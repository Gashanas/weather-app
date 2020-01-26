import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {forecastDetails} from '../shared/constants';
import {City, ForecastTimestamp} from '../shared/types';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent implements OnInit {

  details = forecastDetails;

  @Input() forecast: ForecastTimestamp;
  @Input() isReady: boolean;
  @Input() cities: [City];
  @Output() selectedCity: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onCitySelect(city: string) {
    this.selectedCity.emit(city);
  }

}
