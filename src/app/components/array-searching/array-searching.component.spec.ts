import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySearchingComponent } from './array-searching.component';

describe('ArraySearchingComponent', () => {
  let component: ArraySearchingComponent;
  let fixture: ComponentFixture<ArraySearchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraySearchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraySearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
