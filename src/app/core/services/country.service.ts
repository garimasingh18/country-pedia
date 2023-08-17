import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Countries } from './../interfaces/countries';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries: Countries[] = [];

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Countries[]> {
    return this.http
      .get<Countries[]>('https://restcountries.com/v3.1/all') // @Todo move URL to config file
      .pipe(
        tap((countries: Countries[]) => {
          this.countries = countries;
        })
      );
  }

  getCountryDeatils(countryName: string): any {
    const country = this.countries.filter(
      (c) => c.name.common === countryName
    )[0];
    return country;
  }
}
