import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {CalendarCellComponent} from './calendar/calendar-cell/calendar-cell.component';
import {DetailsCardComponent} from './details-card/details-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ForecastService} from './services/forecast.service';
import {WeekDayPipe} from './shared/pipes/weekDay';
import {TimePipe} from './shared/pipes/time';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarCellComponent,
    DetailsCardComponent,
    WeekDayPipe,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
