import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeStrategyEditComponent } from './trade-strategy-edit.component';

describe('TradeStrategyEditComponent', () => {
  let component: TradeStrategyEditComponent;
  let fixture: ComponentFixture<TradeStrategyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TradeStrategyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeStrategyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
