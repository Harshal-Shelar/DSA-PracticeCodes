import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayInsertionComponent } from './array-insertion.component';

describe('ArrayInsertionComponent', () => {
  let component: ArrayInsertionComponent;
  let fixture: ComponentFixture<ArrayInsertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayInsertionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayInsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
