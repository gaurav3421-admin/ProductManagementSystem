import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProducthttpmethod } from './search-producthttpmethod';

describe('SearchProducthttpmethod', () => {
  let component: SearchProducthttpmethod;
  let fixture: ComponentFixture<SearchProducthttpmethod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchProducthttpmethod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchProducthttpmethod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
