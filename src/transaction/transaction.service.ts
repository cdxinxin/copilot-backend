import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionService {
  findAll() {
    return [
      { id: 1, customerId: 1, fundId: 1, amount: 1000, type: 'investment', status: 'completed' },
      { id: 2, customerId: 2, fundId: 2, amount: 500, type: 'investment', status: 'pending' }
    ];
  }
}
