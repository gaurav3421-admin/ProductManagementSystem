import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductDetails } from './add-product-details';

describe('AddProductDetails', () => {
  let component: AddProductDetails;
  let fixture: ComponentFixture<AddProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
