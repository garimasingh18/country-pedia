import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountriesComponent } from './countries.component';
import { CountryService } from './../../core/services/country.service';
import { CountriesServiceStub } from '../../../mocks/country.service.mock';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CountriesComponent],
      providers: [
        {
          provide: CountryService,
          useClass: CountriesServiceStub,
        },
      ],
    });
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have country list populated', () => {
    expect(component.countries.length).toEqual(2);
  });
});
