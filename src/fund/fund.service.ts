import { Injectable } from '@nestjs/common';
import { mockFunds, mockFundPerformances } from '../mock-data';

@Injectable()
export class FundService {
  findAll() {
    return mockFunds;
  }

  findOne(id: string) {
    return mockFunds.find(fund => fund.id === id);
  }

  getFundPerformance(id: string) {
    return mockFundPerformances.filter(perf => perf.fundId === id);
  }
}
