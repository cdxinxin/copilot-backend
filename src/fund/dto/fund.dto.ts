import { ApiProperty } from '@nestjs/swagger';

export class FundDto {
  @ApiProperty({ description: 'Fund ID' })
  id: string;

  @ApiProperty({ description: 'Fund Name' })
  fundName: string;

  @ApiProperty({ description: 'Fund Code' })
  code: string;

  @ApiProperty({ description: 'Unit Net Value' })
  unitPrice: number;

  @ApiProperty({ description: 'Currency Code' })
  currencyCode: string;

  @ApiProperty({ description: 'Net Value Date' })
  priceDate: string;

  @ApiProperty({ description: 'Net Value Change' })
  navChange: number;

  @ApiProperty({ description: 'Net Value Change Percentage' })
  navChangePercent: number;

  @ApiProperty({ description: 'Fund Type' })
  fundType: string;

  @ApiProperty({ description: 'Risk Level' })
  riskLevel: string;

  @ApiProperty({ description: 'Fund Manager' })
  manager: string;

  @ApiProperty({ description: 'Fund Establishment Date' })
  establishedDate: string;

  @ApiProperty({ description: 'Fund Size (in 100 million CNY)' })
  fundSize: number;

  @ApiProperty({ description: 'Fund Status' })
  status: string;

  @ApiProperty({ description: 'Fund Custodian' })
  custodian: string;

  @ApiProperty({ description: 'Fund Dividend Type' })
  dividendType: string;

  @ApiProperty({ description: 'Fund Investment Scope' })
  investmentScope: string;
}
