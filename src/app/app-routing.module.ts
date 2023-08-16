import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './pages/countries/countries.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'country-details', component: CountryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
