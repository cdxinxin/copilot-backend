# Mock Data 管理

本文件夹包含了后端API使用的所有模拟数据，采用模块化管理方式。

## 文件结构

```
mock-data/
├── interfaces/           # 接口定义
│   ├── customer.interface.ts
│   ├── fund.interface.ts
│   ├── transaction.interface.ts
│   └── index.ts
├── customer.mock.ts      # 客户相关模拟数据
├── fund.mock.ts         # 基金相关模拟数据
├── transaction.mock.ts   # 交易相关模拟数据
└── index.ts             # 统一导出
```

## 接口说明

### Customer 模块
- `Customer`: 客户基本信息
- `PortfolioData`: 投资组合数据
- `WealthSpecialist`: 财富专家信息
- `Transaction`: 交易记录
- `DashboardData`: 仪表板数据
- `Allocation`: 资产配置

### Fund 模块
- `Fund`: 基金基本信息
- `FundPerformance`: 基金业绩表现

### Transaction 模块
- `TransactionHistory`: 详细交易历史记录

## 使用方式

```typescript
// 导入特定的mock data
import { mockCustomers, mockDashboardData } from '../mock-data';

// 导入接口类型
import { Customer, PortfolioData } from '../mock-data';

// 在service中使用
findAll() {
  return mockCustomers;
}
```

## 数据一致性

所有mock data都遵循对应的DTO类型定义，确保类型安全：
- `riskProfile`: 'Conservative' | 'Moderate' | 'Aggressive'
- `Transaction.type`: 'Subscribe' | 'Switch' | 'Redeem'
- `Transaction.status`: 'Completed' | 'Pending' | 'Failed'

## 扩展指南

1. **添加新的数据类型**：
   - 在 `interfaces/` 中定义接口
   - 在对应模块的 `.mock.ts` 文件中添加数据
   - 在 `index.ts` 中导出

2. **修改现有数据**：
   - 直接编辑对应的 `.mock.ts` 文件
   - 确保数据符合接口定义

3. **添加新模块**：
   - 创建新的接口文件
   - 创建对应的mock数据文件
   - 更新 `index.ts` 导出
