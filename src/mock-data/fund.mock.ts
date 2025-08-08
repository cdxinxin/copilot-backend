import { Fund, FundPerformance } from './interfaces';
import { FundDto } from '../fund/dto/fund.dto';

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

export const mockFundList: FundDto[] = [
  {
    id: 'FUND001',
    fundName: 'Manulife Growth Fund',
    code: 'MGF001',
    unitPrice: 10.25,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.12,
    navChangePercent: 1.18
  },
  {
    id: 'FUND002',
    fundName: 'Manulife Bond Fund',
    code: 'MBF002',
    unitPrice: 8.50,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: -0.05,
    navChangePercent: -0.59
  },
  {
    id: 'FUND003',
    fundName: 'Manulife Balanced Fund',
    code: 'MBF003',
    unitPrice: 9.80,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.08,
    navChangePercent: 0.82
  },
  {
    id: 'FUND004',
    fundName: 'Manulife Asia Equity',
    code: 'MAE004',
    unitPrice: 12.10,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.20,
    navChangePercent: 1.68
  },
  {
    id: 'FUND005',
    fundName: 'Manulife Global Bond',
    code: 'MGB005',
    unitPrice: 7.95,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: -0.03,
    navChangePercent: -0.38
  },
  {
    id: 'FUND006',
    fundName: 'Manulife US Equity',
    code: 'MUE006',
    unitPrice: 15.60,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.25,
    navChangePercent: 1.63
  },
  {
    id: 'FUND007',
    fundName: 'Manulife China Fund',
    code: 'MCF007',
    unitPrice: 11.30,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.10,
    navChangePercent: 0.89
  },
  {
    id: 'FUND008',
    fundName: 'Manulife Emerging Markets',
    code: 'MEM008',
    unitPrice: 13.40,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.18,
    navChangePercent: 1.36
  },
  {
    id: 'FUND009',
    fundName: 'Manulife Tech Fund',
    code: 'MTF009',
    unitPrice: 16.80,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.30,
    navChangePercent: 1.82
  },
  {
    id: 'FUND010',
    fundName: 'Manulife Healthcare Fund',
    code: 'MHF010',
    unitPrice: 14.25,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.22,
    navChangePercent: 1.57
  },
  {
    id: 'FUND011',
    fundName: 'Manulife ESG Fund',
    code: 'MESG011',
    unitPrice: 10.90,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.09,
    navChangePercent: 0.83
  },
  {
    id: 'FUND012',
    fundName: 'Manulife Dividend Fund',
    code: 'MDF012',
    unitPrice: 9.60,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.07,
    navChangePercent: 0.73
  },
  {
    id: 'FUND013',
    fundName: 'Manulife Money Market',
    code: 'MMM013',
    unitPrice: 6.50,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.01,
    navChangePercent: 0.15
  },
  {
    id: 'FUND014',
    fundName: 'Manulife Pacific Fund',
    code: 'MPF014',
    unitPrice: 13.90,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.16,
    navChangePercent: 1.17
  },
  {
    id: 'FUND015',
    fundName: 'Manulife Europe Fund',
    code: 'MEF015',
    unitPrice: 12.75,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.13,
    navChangePercent: 1.03
  },
  {
    id: 'FUND016',
    fundName: 'Manulife Japan Fund',
    code: 'MJF016',
    unitPrice: 11.80,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.11,
    navChangePercent: 0.94
  },
  {
    id: 'FUND017',
    fundName: 'Manulife India Fund',
    code: 'MIF017',
    unitPrice: 10.40,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.14,
    navChangePercent: 1.36
  },
  {
    id: 'FUND018',
    fundName: 'Manulife Real Estate',
    code: 'MRE018',
    unitPrice: 17.20,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.28,
    navChangePercent: 1.65
  },
  {
    id: 'FUND019',
    fundName: 'Manulife Infrastructure',
    code: 'MINF019',
    unitPrice: 15.10,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.21,
    navChangePercent: 1.41
  },
  {
    id: 'FUND020',
    fundName: 'Manulife Global Opportunities',
    code: 'MGO020',
    unitPrice: 18.50,
    currencyCode: 'USD',
    priceDate: '2025-07-15',
    navChange: 0.35,
    navChangePercent: 1.93
  }
];
