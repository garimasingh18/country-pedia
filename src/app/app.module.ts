import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { CountriesComponent } from './pages/countries/countries.component';

@NgModule({
  declarations: [AppComponent, CountryDetailsComponent, CountriesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
