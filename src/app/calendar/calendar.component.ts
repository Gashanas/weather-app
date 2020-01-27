import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ForecastTimestamp} from '../shared/types';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  collapsibleItems = {};

  @Input() displayedForecast: {};
  @Input() displayedHours;
  @Input() forecastDates;
  @Input() isReady: boolean;
  @Input() currentDate: string;

  @Output() selectedForecast: EventEmitter<ForecastTimestamp> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onItemClick(forecast) {
    this.forecastDates.forEach(date => {
      this.displayedForecast[date].forEach(forecastDetails => {
        forecastDetails.selected = false;
      });
    });
    forecast.selected = true;
    this.selectedForecast.emit(forecast);
  }

  collapse(date) {
    this.collapsibleItems[date] ? this.collapsibleItems[date] = false : this.collapsibleItems[date] = true;
  }

  // TODO replace with propper implementation for showing collapsed calendar items
  // calendar can behave strangely if customer will resize the window, but usually they aren't doing that :)).
  isMobile(): boolean {
    const width = document.documentElement.clientWidth;
    const breakpoint = 960;
    return width < breakpoint;
  }


}
