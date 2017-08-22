import { Component } from '@angular/core';

import { WeatherInfo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cityList: string[] = [];
  currentWeatherInfo: WeatherInfo[] = [];

  whenCityAdded(city: string) {
    this.cityList.push(city);
  }

  whenCitySelected(data: WeatherInfo[]) {
    this.currentWeatherInfo = data;
  }
}
