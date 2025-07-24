import { TransactionHistory } from './interfaces';

export const mockTransactionHistory: TransactionHistory[] = [
  {
    id: 'TXN001',
    customerId: '1',
    fundId: 'FUND001',
    fundName: 'Manulife Growth Fund',
    type: 'Subscribe',
    amount: 50000,
    units: 5000,
    price: 10.00,
    date: '2025-07-15',
    status: 'Completed',
    reference: 'REF001'
  },
  {
    id: 'TXN002',
    customerId: '1',
    fundId: 'FUND002',
    fundName: 'Manulife Bond Fund',
    type: 'Switch',
    amount: 25000,
    units: 2500,
    price: 10.00,
    date: '2025-07-10',
    status: 'Pending',
    reference: 'REF002'
  },
  {
    id: 'TXN003',
    customerId: '1',
    fundId: 'FUND003',
    fundName: 'Manulife Balanced Fund',
    type: 'Redeem',
    amount: 15000,
    units: 1500,
    price: 10.00,
    date: '2025-07-05',
    status: 'Completed',
    reference: 'REF003'
  },
  {
    id: 'TXN004',
    customerId: '2',
    fundId: 'FUND001',
    fundName: 'Manulife Growth Fund',
    type: 'Subscribe',
    amount: 30000,
    units: 3000,
    price: 10.00,
    date: '2025-07-08',
    status: 'Completed',
    reference: 'REF004'
  }
];
