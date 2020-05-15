import { BackTestTrade } from './backTestTrade';

export class BackTestResponse {
  profitPercentage : number;
  profitOrLoss : number;
  trades : Array<BackTestTrade>;

}
