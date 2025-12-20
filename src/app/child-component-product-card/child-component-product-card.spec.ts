import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentProductCard } from './child-component-product-card';

describe('ChildComponentProductCard', () => {
  let component: ChildComponentProductCard;
  let fixture: ComponentFixture<ChildComponentProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponentProductCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponentProductCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
