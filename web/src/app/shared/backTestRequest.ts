import { TradeStrategy } from './tradeStrategy';
import { StockWatch } from './stockWatch';

export class BackTestRequest {
  strategyName : string;
  ticker: string;
  quantity: number;
  intervalDuration: string;
  tradeStrategy: TradeStrategy;
  stockWatch: StockWatch;
  candleCount: number;
}
