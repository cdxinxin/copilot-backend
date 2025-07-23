import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { FundModule } from './fund/fund.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [CustomerModule, FundModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
