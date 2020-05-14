import { BackTestRequest } from './backTestRequest';

export class BackTestStrategy {
   strategyName: string;
   backTestRequest: BackTestRequest;
   profitOrLoss: number;
   profitPercentage: number;
}
