import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTopics } from './advance-topics';

describe('AdvanceTopics', () => {
  let component: AdvanceTopics;
  let fixture: ComponentFixture<AdvanceTopics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceTopics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceTopics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
