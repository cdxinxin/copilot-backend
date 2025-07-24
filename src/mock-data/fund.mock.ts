import { Fund, FundPerformance } from './interfaces';

export const mockFunds: Fund[] = [
  {
    id: 'FUND001',
    name: 'Manulife Growth Fund',
    category: 'Equity',
    performance: 8.5,
    risk: 'High',
    minimumInvestment: 1000,
    managementFee: 1.5
  },
  {
    id: 'FUND002',
    name: 'Manulife Bond Fund',
    category: 'Fixed Income',
    performance: 4.2,
    risk: 'Low',
    minimumInvestment: 500,
    managementFee: 0.8
  },
  {
    id: 'FUND003',
    name: 'Manulife Balanced Fund',
    category: 'Multi Asset',
    performance: 6.8,
    risk: 'Medium',
    minimumInvestment: 750,
    managementFee: 1.2
  }
];

export const mockFundPerformances: FundPerformance[] = [
  { fundId: 'FUND001', period: '1M', return: 2.1 },
  { fundId: 'FUND001', period: '3M', return: 6.3 },
  { fundId: 'FUND001', period: '6M', return: 12.5 },
  { fundId: 'FUND001', period: '1Y', return: 8.5 },
  { fundId: 'FUND002', period: '1M', return: 0.8 },
  { fundId: 'FUND002', period: '3M', return: 2.1 },
  { fundId: 'FUND002', period: '6M', return: 3.8 },
  { fundId: 'FUND002', period: '1Y', return: 4.2 },
  { fundId: 'FUND003', period: '1M', return: 1.5 },
  { fundId: 'FUND003', period: '3M', return: 4.2 },
  { fundId: 'FUND003', period: '6M', return: 7.8 },
  { fundId: 'FUND003', period: '1Y', return: 6.8 }
];
