import { of } from 'rxjs';

export class CountriesServiceStub {
  getCountries() {
    return of([
      {
        name: {
          common: 'UK',
        },
        population: 111,
        region: 'some region',
        capital: 'UK capital',
        flags: 'someurl/uk.png',
      },
      {
        name: {
          common: 'US',
        },
        population: 222,
        region: 'some US region',
        capital: 'US capital',
        flags: 'someurl/us.png',
      },
    ]);
  }
}
