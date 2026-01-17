import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecycleHooks } from './component-lifecycle-hooks';

describe('ComponentLifecycleHooks', () => {
  let component: ComponentLifecycleHooks;
  let fixture: ComponentFixture<ComponentLifecycleHooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLifecycleHooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLifecycleHooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
