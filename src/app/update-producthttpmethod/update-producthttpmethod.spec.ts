import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProducthttpmethod } from './update-producthttpmethod';

describe('UpdateProducthttpmethod', () => {
  let component: UpdateProducthttpmethod;
  let fixture: ComponentFixture<UpdateProducthttpmethod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProducthttpmethod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProducthttpmethod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
