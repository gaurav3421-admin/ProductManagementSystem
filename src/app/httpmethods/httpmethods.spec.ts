import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpmethods } from './httpmethods';

describe('Httpmethods', () => {
  let component: Httpmethods;
  let fixture: ComponentFixture<Httpmethods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpmethods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Httpmethods);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
