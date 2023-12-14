import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayTraversingComponent } from './array-traversing.component';

describe('ArrayTraversingComponent', () => {
  let component: ArrayTraversingComponent;
  let fixture: ComponentFixture<ArrayTraversingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayTraversingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayTraversingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
