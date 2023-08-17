import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { ReplaceSpacesWithDashPipe } from './core/pipes/replace-spaces-with-dash.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    CountriesComponent,
    ReplaceSpacesWithDashPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
