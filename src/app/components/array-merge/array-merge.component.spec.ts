import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayMergeComponent } from './array-merge.component';

describe('ArrayMergeComponent', () => {
  let component: ArrayMergeComponent;
  let fixture: ComponentFixture<ArrayMergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayMergeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
