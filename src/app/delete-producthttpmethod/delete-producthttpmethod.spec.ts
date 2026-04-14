import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProducthttpmethod } from './delete-producthttpmethod';

describe('DeleteProducthttpmethod', () => {
  let component: DeleteProducthttpmethod;
  let fixture: ComponentFixture<DeleteProducthttpmethod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProducthttpmethod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProducthttpmethod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
