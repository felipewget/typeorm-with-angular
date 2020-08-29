import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerOptionsListComponent } from './farmer-options-list.component';

describe('FarmerOptionsListComponent', () => {
  let component: FarmerOptionsListComponent;
  let fixture: ComponentFixture<FarmerOptionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerOptionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
