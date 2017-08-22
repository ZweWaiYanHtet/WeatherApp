import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherFormComponent } from './components/weather-form.component';
import { CityListComponent } from './components/city-list.component';
import { WeatherInfoComponent } from './components/weather-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    CityListComponent,
    WeatherInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
