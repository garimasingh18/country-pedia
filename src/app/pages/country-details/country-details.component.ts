import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../core/services/country.service';
import { Subscription } from 'rxjs';
import { CountriesDeatils } from './../../core/interfaces/countries';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country!: CountriesDeatils;
  countryName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const countryName = params['name'].replaceAll('-', ' ');
      console.log(countryName);
      this.country = this.countriesService.getCountryDetails(countryName);
    });
  }

  getCountryLink(id: any) {
    const name = this.countriesService.getCountryNameByID(id);

    return '/country-detail/' + name;
  }
}
