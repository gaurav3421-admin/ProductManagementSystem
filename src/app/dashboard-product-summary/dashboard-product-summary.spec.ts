import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductSummary } from './dashboard-product-summary';

describe('DashboardProductSummary', () => {
  let component: DashboardProductSummary;
  let fixture: ComponentFixture<DashboardProductSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProductSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProductSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
