export interface Fund {
  id: string;
  name: string;
  category: string;
  performance: number;
  risk: 'Low' | 'Medium' | 'High';
  minimumInvestment: number;
  managementFee: number;
}

export interface FundPerformance {
  fundId: string;
  period: '1M' | '3M' | '6M' | '1Y' | '3Y' | '5Y';
  return: number;
}
