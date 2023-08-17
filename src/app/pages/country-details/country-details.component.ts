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
    const countryName: string = this.activatedRoute.snapshot.params[
      'name'
    ].replaceAll('-', ' ');
    this.country = this.countriesService.getCountryDeatils(countryName);
  }
}
