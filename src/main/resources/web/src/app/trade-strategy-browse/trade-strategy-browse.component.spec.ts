import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeStrategyBrowseComponent } from './trade-strategy-browse.component';

describe('EmployeesListComponent', () => {
  let component: TradeStrategyBrowseComponent;
  let fixture: ComponentFixture<TradeStrategyBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeStrategyBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeStrategyBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
