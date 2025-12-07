import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductDetails } from './delete-product-details';

describe('DeleteProductDetails', () => {
  let component: DeleteProductDetails;
  let fixture: ComponentFixture<DeleteProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
