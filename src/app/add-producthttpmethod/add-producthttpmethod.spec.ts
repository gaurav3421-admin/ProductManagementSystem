import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProducthttpmethod } from './add-producthttpmethod';

describe('AddProducthttpmethod', () => {
  let component: AddProducthttpmethod;
  let fixture: ComponentFixture<AddProducthttpmethod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProducthttpmethod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProducthttpmethod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
