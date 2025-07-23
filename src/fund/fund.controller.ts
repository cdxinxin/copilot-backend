import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { FundService } from './fund.service';

@ApiTags('Fund')
@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Get()
  @ApiOperation({ summary: 'Get all funds' })
  @ApiResponse({ status: 200, description: 'List of funds' })
  findAll() {
    return this.fundService.findAll();
  }
}
