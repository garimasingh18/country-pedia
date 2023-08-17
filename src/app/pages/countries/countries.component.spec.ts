import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { CountriesComponent } from './countries.component';
import { CountryService } from './../../core/services/country.service';
import { CountriesServiceStub } from '../../../mocks/country.service.mock';
import { ReplaceSpacesWithDashPipe } from '../../core/pipes/replace-spaces-with-dash.pipe';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule],
      declarations: [CountriesComponent, ReplaceSpacesWithDashPipe],
      providers: [
        {
          provide: CountryService,
          useClass: CountriesServiceStub,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { name: 'Saudi-Arabia' } },
          },
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
