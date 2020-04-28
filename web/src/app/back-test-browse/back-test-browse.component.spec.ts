import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTestBrowseComponent } from './back-test-browse.component';

describe('BackTestBrowseComponent', () => {
  let component: BackTestBrowseComponent;
  let fixture: ComponentFixture<BackTestBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BackTestBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTestBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
