import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDrivenForm } from './reactive-driven-form';

describe('ReactiveDrivenForm', () => {
  let component: ReactiveDrivenForm;
  let fixture: ComponentFixture<ReactiveDrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveDrivenForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveDrivenForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
