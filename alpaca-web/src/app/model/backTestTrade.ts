
export interface BackTestTrade {
  entryTime: string;
  entrySignal: string;
  priceAtEntry : number;

  exitTime: string;
  exitSignal: string;
  priceAtExit : number;

  profitOrLoss : number;

}
