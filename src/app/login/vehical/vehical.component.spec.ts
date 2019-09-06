import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalComponent } from './vehical.component';

describe('VehicalComponent', () => {
  let component: VehicalComponent;
  let fixture: ComponentFixture<VehicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
