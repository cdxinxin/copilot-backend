import { Injectable } from '@nestjs/common';
import { DashboardDataDto, PortfolioDataDto, WealthSpecialistDto, TransactionDto } from './dto/portfolio.dto';

@Injectable()
export class CustomerService {
  findAll() {
    return [
      { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
      { id: 2, name: 'Customer 2', email: 'customer2@example.com' }
    ];
  }

  getDashboardData(customerId: string): DashboardDataDto {
    const portfolioData: PortfolioDataDto = {
      id: 'CWSXIFUNDSTHREE',
      name: 'CWSXIFUNDSTHREE,CWSXIFUNDSTHREE,CWSXIFUNDSTHREE',
      cifNumber: 'C000027106',
      totalValue: 14485393.54,
      unrealizedProfitLoss: 0.00,
      riskProfile: 'Moderate',
      lastUpdated: '08/07/2025',
      allocations: [
        {
          name: 'Equity',
          percentage: 85.89,
          amount: 11769860.89,
          color: '#22c55e'
        },
        {
          name: 'Bond',
          percentage: 6.13,
          amount: 839533.15,
          color: '#374151'
        },
        {
          name: 'Multi asset',
          percentage: 7.08,
          amount: 970399.80,
          color: '#3b82f6'
        },
        {
          name: 'Money market',
          percentage: 0.90,
          amount: 123466.60,
          color: '#ef4444'
        }
      ]
    };

    const wealthSpecialist: WealthSpecialistDto = {
      name: 'EUSXHHUSO,MODOHMGO XCP,G.O',
      email: 'specialist@manulife.com',
      phone: '+1 (555) 123-4567'
    };

    const transactions: TransactionDto[] = [
      {
        id: '1',
        type: 'Subscribe',
        amount: 50000,
        date: '2025-07-15',
        status: 'Completed'
      },
      {
        id: '2',
        type: 'Switch',
        amount: 25000,
        date: '2025-07-10',
        status: 'Pending'
      },
      {
        id: '3',
        type: 'Redeem',
        amount: 15000,
        date: '2025-07-05',
        status: 'Completed'
      }
    ];

    return {
      portfolioData,
      wealthSpecialist,
      transactions
    };
  }

  getPortfolioData(customerId: string): PortfolioDataDto {
    return this.getDashboardData(customerId).portfolioData;
  }

  getWealthSpecialist(customerId: string): WealthSpecialistDto {
    return this.getDashboardData(customerId).wealthSpecialist;
  }

  getTransactions(customerId: string): TransactionDto[] {
    return this.getDashboardData(customerId).transactions;
  }
}
