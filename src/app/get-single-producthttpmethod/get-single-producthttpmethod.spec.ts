import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleProducthttpmethod } from './get-single-producthttpmethod';

describe('GetSingleProducthttpmethod', () => {
  let component: GetSingleProducthttpmethod;
  let fixture: ComponentFixture<GetSingleProducthttpmethod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSingleProducthttpmethod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSingleProducthttpmethod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
