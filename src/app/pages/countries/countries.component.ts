import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryService } from './../../core/services/country.service';
import { Countries } from './../../core/interfaces/countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent {
  countries!: Countries[];

  constructor(
    private http: HttpClient,
    private countriesService: CountryService
  ) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((res) => {
      this.countries = res;
    });
  }
}
