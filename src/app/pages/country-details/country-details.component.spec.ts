import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './../../core/services/country.service';
import { CountriesServiceStub } from '../../../mocks/country.service.mock';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [CountryDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              name: 'mock-country',
            }),
          },
        },
        {
          provide: CountryService,
          useClass: CountriesServiceStub,
        },
      ],
    });
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
