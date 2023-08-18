import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { CountriesDeatils } from './../interfaces/countries';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries: CountriesDeatils[] = [];

  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountriesDeatils[]> {
    return this.http
      .get<CountriesDeatils[]>('https://restcountries.com/v3.1/all') // @Todo move URL to config file
      .pipe(
        tap((countries: CountriesDeatils[]) => {
          this.countries = countries;
        })
      );
  }

  getCountryDetails(countryName: string): CountriesDeatils {
    const country = this.countries.filter(
      (c) => c.name.common === countryName
    )[0];
    return country;
  }

  getCountryNameByID(id: string): string {
    const country = this.countries.filter((c) => c.cca3 === id)[0];

    return country.name.common;
  }
}
