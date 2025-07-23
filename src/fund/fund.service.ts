import { Injectable } from '@nestjs/common';

@Injectable()
export class FundService {
  findAll() {
    return [
      { id: 1, name: 'Tech Fund', targetAmount: 100000, currentAmount: 50000 },
      { id: 2, name: 'Green Fund', targetAmount: 75000, currentAmount: 25000 }
    ];
  }
}
