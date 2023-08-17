export interface Countries {
  name: {
    common: string;
    nativeName: string;
  };
  population: number;
  region: string;
  capital: string;
  cca3: string;
  flags: { png: string };
}
export interface CountriesDeatils {
  name: {
    common: string;
    nativeName?: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  cca3: string;
  flags: { png: string };
  tld?: string;
  borders?: string[];
  currencies?: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  languages?: Array<{
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }>;
}
