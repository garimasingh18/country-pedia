export interface CountriesDeatils {
  name: {
    common: string;
    nativeName: {};
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  cca3: string;
  flags: { png: string };
  tld?: string;
  borders?: string[];
  currencies: {};
  languages: [];
}
