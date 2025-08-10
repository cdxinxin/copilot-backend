import { Test, TestingModule } from '@nestjs/testing';
import { FundService } from './fund.service';
import { mockFundList, mockFundPerformances } from '../mock-data';

describe('FundService', () => {
  let service: FundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundService],
    }).compile();

    service = module.get<FundService>(FundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll should return all funds', () => {
    expect(service.findAll()).toEqual(mockFundList);
  });

  it('findOne should return correct fund by id', () => {
    const fund = mockFundList[0];
    expect(service.findOne(fund.id)).toEqual(fund);
  });

  it('findOne should return undefined for non-existing id', () => {
    expect(service.findOne('non-existing-id')).toBeUndefined();
  });

  it('getFundPerformance should return performances for fundId', () => {
    const fundId = mockFundPerformances[0].fundId;
    const expected = mockFundPerformances.filter(perf => perf.fundId === fundId);
    expect(service.getFundPerformance(fundId)).toEqual(expected);
  });

  it('getFundPerformance should return empty array for unknown fundId', () => {
    expect(service.getFundPerformance('unknown-id')).toEqual([]);
  });

  it('findByCode should return correct fund by code', () => {
    const fund = mockFundList[0];
    expect(service.findByCode(fund.code)).toEqual(fund);
  });

  it('findByCode should return undefined for non-existing code', () => {
    expect(service.findByCode('non-existing-code')).toBeUndefined();
  });
});
