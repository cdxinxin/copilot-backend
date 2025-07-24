export interface TransactionHistory {
  id: string;
  customerId: string;
  fundId: string;
  fundName: string;
  type: 'Subscribe' | 'Switch' | 'Redeem';
  amount: number;
  units: number;
  price: number;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
  reference: string;
}
