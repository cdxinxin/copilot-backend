import { ApiProperty } from '@nestjs/swagger';

export class FundDto {
  @ApiProperty({ description: '基金ID' })
  id: string;

  @ApiProperty({ description: '基金名称' })
  fundName: string;

  @ApiProperty({ description: '基金代码' })
  code: string;

  @ApiProperty({ description: '单位净值' })
  unitPrice: number;

  @ApiProperty({ description: '币种代码' })
  currencyCode: string;

  @ApiProperty({ description: '净值日期' })
  priceDate: string;

  @ApiProperty({ description: '净值涨跌' })
  navChange: number;

  @ApiProperty({ description: '净值涨跌百分比' })
  navChangePercent: number;

  @ApiProperty({ description: '基金类型' })
  fundType: string;

  @ApiProperty({ description: '风险等级' })
  riskLevel: string;

  @ApiProperty({ description: '基金管理人' })
  manager: string;

  @ApiProperty({ description: '基金成立日期' })
  establishedDate: string;

  @ApiProperty({ description: '基金规模（单位：亿元）' })
  fundSize: number;

  @ApiProperty({ description: '基金状态' })
  status: string;

  @ApiProperty({ description: '基金托管人' })
  custodian: string;

  @ApiProperty({ description: '基金分红方式' })
  dividendType: string;

  @ApiProperty({ description: '基金投资范围' })
  investmentScope: string;
}
