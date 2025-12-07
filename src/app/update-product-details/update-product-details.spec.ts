import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductDetails } from './update-product-details';

describe('UpdateProductDetails', () => {
  let component: UpdateProductDetails;
  let fixture: ComponentFixture<UpdateProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
