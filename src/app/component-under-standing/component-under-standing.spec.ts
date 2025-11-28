import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUnderStanding } from './component-under-standing';

describe('ComponentUnderStanding', () => {
  let component: ComponentUnderStanding;
  let fixture: ComponentFixture<ComponentUnderStanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentUnderStanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentUnderStanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
