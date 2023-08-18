import { of } from 'rxjs';

export class CountriesServiceStub {
  getCountries() {
    return of([
      {
        name: {
          common: 'mock country',
        },
        population: 111,
        region: 'some region',
        capital: 'mock capital',
        flags: { png: 'somemockurl' },
      },
      {
        name: {
          common: 'Czechia',
        },
        population: 222,
        region: 'some Serbia region',
        capital: 'Serbia capital',
        flags: { png: 'someurl' },
      },
      {
        name: {
          common: 'Serbia',
        },
        population: 222,
        region: 'some Serbia region',
        capital: 'Serbia capital',
        flags: { png: 'someurl' },
      },
    ]);
  }
  getCountryDeatils(name: string) {
    return of([
      {
        name: {
          common: 'mock country',
        },
        population: 111,
        region: 'some region',
        capital: 'UK capital',
        flags: {
          alt: 'The flag of UK',
          png: 'https://bla.com/bla/uk.png',
        },
      },
    ]);
  }
}
