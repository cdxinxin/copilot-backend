import { Injectable } from '@nestjs/common';
import { mockTransactionHistory } from '../mock-data';

@Injectable()
export class TransactionService {
  findAll() {
    return mockTransactionHistory;
  }

  findByCustomerId(customerId: string) {
    return mockTransactionHistory.filter(transaction => transaction.customerId === customerId);
  }

  findByFundId(fundId: string) {
    return mockTransactionHistory.filter(transaction => transaction.fundId === fundId);
  }
}
