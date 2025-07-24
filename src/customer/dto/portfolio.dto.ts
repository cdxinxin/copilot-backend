import { ApiProperty } from '@nestjs/swagger';

export class FundAllocationDto {
  @ApiProperty({ description: '基金类型名称' })
  name: string;

  @ApiProperty({ description: '分配百分比' })
  percentage: number;

  @ApiProperty({ description: '金额' })
  amount: number;

  @ApiProperty({ description: '图表颜色' })
  color: string;
}

export class PortfolioDataDto {
  @ApiProperty({ description: '投资组合ID' })
  id: string;

  @ApiProperty({ description: '投资组合名称' })
  name: string;

  @ApiProperty({ description: 'CIF号码' })
  cifNumber: string;

  @ApiProperty({ description: '总市值' })
  totalValue: number;

  @ApiProperty({ description: '未实现盈亏' })
  unrealizedProfitLoss: number;

  @ApiProperty({ description: '风险等级', enum: ['Conservative', 'Moderate', 'Aggressive'] })
  riskProfile: 'Conservative' | 'Moderate' | 'Aggressive';

  @ApiProperty({ description: '最后更新时间' })
  lastUpdated: string;

  @ApiProperty({ description: '资产配置', type: [FundAllocationDto] })
  allocations: FundAllocationDto[];
}

export class WealthSpecialistDto {
  @ApiProperty({ description: '财富专家姓名' })
  name: string;

  @ApiProperty({ description: '邮箱' })
  email: string;

  @ApiProperty({ description: '电话' })
  phone: string;
}

export class TransactionDto {
  @ApiProperty({ description: '交易ID' })
  id: string;

  @ApiProperty({ description: '交易类型', enum: ['Subscribe', 'Switch', 'Redeem'] })
  type: 'Subscribe' | 'Switch' | 'Redeem';

  @ApiProperty({ description: '交易金额' })
  amount: number;

  @ApiProperty({ description: '交易日期' })
  date: string;

  @ApiProperty({ description: '交易状态', enum: ['Pending', 'Completed', 'Failed'] })
  status: 'Pending' | 'Completed' | 'Failed';
}

export class DashboardDataDto {
  @ApiProperty({ description: '投资组合数据', type: PortfolioDataDto })
  portfolioData: PortfolioDataDto;

  @ApiProperty({ description: '财富专家信息', type: WealthSpecialistDto })
  wealthSpecialist: WealthSpecialistDto;

  @ApiProperty({ description: '交易记录', type: [TransactionDto] })
  transactions: TransactionDto[];
}
