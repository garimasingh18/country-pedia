import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('CountryDetailsComponent', () => {
  let component: CountryDetailsComponent;
  let fixture: ComponentFixture<CountryDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule],
      declarations: [CountryDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { name: 'Saudi-Arabia' } },
          },
        },
      ],
    });
    fixture = TestBed.createComponent(CountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.country = {
      name: {
        common: 'string',
        nativeName: '',
      },
      population: 111,
      region: '',
      subregion: '',
      capital: '',
      flags: { png: '' },
      tld: 'string',
      borders: [],
      currencies: [],
      languages: [],
    };
    expect(component).toBeTruthy();
  });
});
