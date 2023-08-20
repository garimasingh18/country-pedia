import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { ReplaceSpacesWithDashPipe } from './core/pipes/replace-spaces-with-dash.pipe';
import { HeaderComponent } from './features/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    CountriesComponent,
    ReplaceSpacesWithDashPipe,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
