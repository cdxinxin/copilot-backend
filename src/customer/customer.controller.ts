import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { DashboardDataDto, PortfolioDataDto, WealthSpecialistDto, TransactionDto } from './dto/portfolio.dto';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  @ApiOperation({ summary: 'Get all customers' })
  @ApiResponse({ status: 200, description: 'List of customers' })
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id/portfolio')
  @ApiOperation({ summary: 'Get customer portfolio data' })
  @ApiResponse({ status: 200, description: 'Portfolio data', type: PortfolioDataDto })
  @ApiParam({ name: 'id', description: 'Customer ID' })
  getPortfolioData(@Param('id') customerId: string): PortfolioDataDto {
    console.log(`📊 Portfolio API called for customer: ${customerId} at ${new Date().toISOString()}`);
    return this.customerService.getPortfolioData(customerId);
  }

  @Get(':id/wealth-specialist')
  @ApiOperation({ summary: 'Get customer wealth specialist info' })
  @ApiResponse({ status: 200, description: 'Wealth specialist info', type: WealthSpecialistDto })
  @ApiParam({ name: 'id', description: 'Customer ID' })
  getWealthSpecialist(@Param('id') customerId: string): WealthSpecialistDto {
    console.log(`👨‍💼 Wealth Specialist API called for customer: ${customerId} at ${new Date().toISOString()}`);
    return this.customerService.getWealthSpecialist(customerId);
  }

  @Get(':id/transactions')
  @ApiOperation({ summary: 'Get customer transactions' })
  @ApiResponse({ status: 200, description: 'Transaction list', type: [TransactionDto] })
  @ApiParam({ name: 'id', description: 'Customer ID' })
  getTransactions(@Param('id') customerId: string): TransactionDto[] {
    return this.customerService.getTransactions(customerId);
  }
}
