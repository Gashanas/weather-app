import {Component, Input, OnInit} from '@angular/core';
import {forecastDetails} from '../../shared/constants';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss']
})
export class CalendarCellComponent implements OnInit {

  @Input() forecast;
  details = forecastDetails;

  constructor() {
  }

  ngOnInit() {
  }

}
