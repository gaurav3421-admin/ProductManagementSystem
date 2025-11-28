import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProductDetails } from './get-product-details';

describe('GetProductDetails', () => {
  let component: GetProductDetails;
  let fixture: ComponentFixture<GetProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetProductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
