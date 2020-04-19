import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTestEditComponent } from './back-test-edit.component';

describe('BackTestEditComponent', () => {
  let component: BackTestEditComponent;
  let fixture: ComponentFixture<BackTestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BackTestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
