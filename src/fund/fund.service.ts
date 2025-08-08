import { Injectable } from '@nestjs/common';
import { mockFundList, mockFundPerformances } from '../mock-data';

@Injectable()
export class FundService {
  findAll() {
    return mockFundList;
  }

  findOne(id: string) {
    return mockFundList.find(fund => fund.id === id);
  }

  getFundPerformance(id: string) {
    return mockFundPerformances.filter(perf => perf.fundId === id);
  }
}
