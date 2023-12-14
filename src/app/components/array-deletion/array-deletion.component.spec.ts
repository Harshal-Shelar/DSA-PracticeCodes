import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayDeletionComponent } from './array-deletion.component';

describe('ArrayDeletionComponent', () => {
  let component: ArrayDeletionComponent;
  let fixture: ComponentFixture<ArrayDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayDeletionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
