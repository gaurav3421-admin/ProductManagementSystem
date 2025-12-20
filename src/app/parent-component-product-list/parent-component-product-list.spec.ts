import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponentProductList } from './parent-component-product-list';

describe('ParentComponentProductList', () => {
  let component: ParentComponentProductList;
  let fixture: ComponentFixture<ParentComponentProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponentProductList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponentProductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
