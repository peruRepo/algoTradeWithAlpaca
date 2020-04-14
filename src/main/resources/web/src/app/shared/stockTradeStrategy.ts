import { TradeStrategy } from './tradeStrategy';
import { StockWatch } from './stockWatch';

export class StockTradeStrategy {

   ticker: string;
   quantity: number;
   interval: number;
   timeUnit: string;
   intervalDuration: string;
   tradeStrategy: TradeStrategy;
   state: string;
   stockWatch: StockWatch;
   candleCount: number;
}
