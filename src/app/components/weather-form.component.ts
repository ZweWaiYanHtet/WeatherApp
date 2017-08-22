import {Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {

  constructor() { }

  @ViewChild('addCityForm') addCityForm: NgForm;

  @Output()
  onAddCity: EventEmitter<string> = new EventEmitter<string>();

  public addCity(): void {
    const cityName: string = this.addCityForm.value.cityName;

    this.onAddCity.emit(cityName);

    this.addCityForm.reset();
  }

  ngOnInit() {
  }

}
