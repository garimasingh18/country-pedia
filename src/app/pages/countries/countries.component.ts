import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryService } from './../../core/services/country.service';
import { CountriesDeatils } from './../../core/interfaces/countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent {
  private countries!: CountriesDeatils[];
  filteredCountries: CountriesDeatils[] = [];
  shouldLoadMore = true;
  noOfRecords = 8;

  constructor(
    private http: HttpClient,
    private countriesService: CountryService
  ) {}

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((res) => {
      this.countries = res;
      this.filteredCountries = this.countries.slice(0, this.noOfRecords);
    });
  }

  loadMoreData() {
    if (this.shouldLoadMore) {
      this.noOfRecords += this.noOfRecords;
      this.filteredCountries = this.countries.slice(0, this.noOfRecords);
    }
  }

  onScroll() {
    if (this.noOfRecords > this.countries.length) {
      alert('end of record');
    } else {
      this.loadMoreData();
    }
  }

  filterCountriesByRegion(value: string): void {
    if (value === 'all') {
      this.filteredCountries = this.countries;
      this.shouldLoadMore = true;
    } else {
      this.shouldLoadMore = false;
      this.filteredCountries = this.countries.filter(
        (country) => country.region.toLowerCase() === value.toLowerCase()
      );
    }
  }

  filterCountriesByName(value: string): void {
    this.shouldLoadMore = false;
    this.filteredCountries = this.countries.filter((country) => {
      return country.name.common.toLowerCase().includes(value.toLowerCase());
    });
  }
}
