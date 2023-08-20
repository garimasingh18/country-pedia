import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../core/services/country.service';
import { CountriesDeatils } from './../../core/interfaces/countries';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country!: CountriesDeatils;
  countryName: string = '';
  nativeName: string = '';
  currency = '';
  languages: string[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const countryName = params['name'].replaceAll('-', ' ');
      this.country = this.countriesService.getCountryDetails(countryName);

      let nativeNameObj: any = Object.values(this.country.name.nativeName)[0];
      this.nativeName = nativeNameObj.common;
      this.currency = Object.keys(this.country.currencies)[0];
      this.languages = this.getLanguages();
      console.log(this.languages);
    });
  }

  getCountryLink(id: string) {
    const name = this.countriesService.getCountryNameByID(id);

    return '/country-detail/' + name;
  }
  private getLanguages() {
    return Object.values(this.country.languages);
  }
}
