import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextpagedetailsComponent } from './nextpagedetails.component';

describe('NextpagedetailsComponent', () => {
  let component: NextpagedetailsComponent;
  let fixture: ComponentFixture<NextpagedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextpagedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextpagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
