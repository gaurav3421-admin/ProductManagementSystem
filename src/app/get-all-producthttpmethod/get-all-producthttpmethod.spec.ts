import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProducthttpmethod } from './get-all-producthttpmethod';

describe('GetAllProducthttpmethod', () => {
  let component: GetAllProducthttpmethod;
  let fixture: ComponentFixture<GetAllProducthttpmethod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllProducthttpmethod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllProducthttpmethod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
