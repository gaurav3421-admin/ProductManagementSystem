import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aggridexample } from './aggridexample';

describe('Aggridexample', () => {
  let component: Aggridexample;
  let fixture: ComponentFixture<Aggridexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aggridexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aggridexample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
