import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundCardComponent } from './page-not-found-card.component';

describe('PageNotFoundCardComponent', () => {
  let component: PageNotFoundCardComponent;
  let fixture: ComponentFixture<PageNotFoundCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
